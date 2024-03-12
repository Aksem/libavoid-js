import logging
import os
from pathlib import Path
from shutil import rmtree, copyfile
from typing import Literal

from process_utils import execute_command


SOURCE_FILES = [
  'hyperedgeimprover',
  'geomtypes',
  'hyperedgetree',
  'makepath',
  'connend',
  'actioninfo',
  'connectionpin',
  'obstacle',
  'junction',
  'shape',
  'hyperedge',
  'vertices',
  'mtst',
  'connector',
  'graph',
  'router'
]
ADAPTAGRAMS_VERSION = "1.0.0"

logging.basicConfig()
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def patch_adaptagrams_sources(path):
  hyperedgeimprover_header_content = ''
  with open(f'{path}cola/libavoid/hyperedgeimprover.h', 'r') as file:
    hyperedgeimprover_header_content = file.read()
  
  hyperedgeimprover_header_content = hyperedgeimprover_header_content.replace('namespace Avoid {\n\n', 'namespace Avoid {\n\nclass Router;\nstruct HyperedgeNewAndDeletedObjectLists;\n')
  with open(f'{path}cola/libavoid/hyperedgeimprover.h', 'w') as file:
    file.write(hyperedgeimprover_header_content)


def generate_bindings(output_dir, debug=False):
  try:
    os.mkdir(output_dir)
  except FileExistsError:
    ...

  glue_wrapper_content = ''
  # combine all idls in one
  result_idl_content = ''
  for source_file in SOURCE_FILES:
    with open(f'../webidl_definitions/libavoid/{source_file}.idl', 'r') as idl_file:
      result_idl_content += f'// {source_file}.idl\n' + idl_file.read() + '\n\n'
  
  result_idl_filename = f'./{output_dir}/result.idl'
  with open(result_idl_filename, 'w') as result_idl_file:
    result_idl_file.write(result_idl_content)
  
  env = dict()
  if debug:
    env['IDL_DOCS'] = '1'
  
  execute_command(f'python3 webidl-embindgen/webidl_binder.py {result_idl_filename} ./{output_dir}/glue', logger, env=env)

  for source_file in SOURCE_FILES:
    glue_wrapper_content += f'#include <libavoid/{source_file}.h>\n'

  glue_wrapper_content += '#include <glue.cpp>'

  glue_wrapper_filename = f'./{output_dir}/glue_wrapper.cpp'
  with open(glue_wrapper_filename, 'w') as glue_wrapper_file:
    glue_wrapper_file.write(glue_wrapper_content)


def compile(generated_sources_dir, dist_dir_name, debug=False, environment: Literal["web"] | Literal["node"] = "web"):
  try:
    os.mkdir(dist_dir_name)
  except FileExistsError:
    ...

  post_js_args = f' --post-js ./{generated_sources_dir}/glue.js'
  compiler_sources = ''
  for source_file in SOURCE_FILES:
    compiler_sources += f' ./adaptagrams/cola/libavoid/{source_file}.cpp'
  
  compiler_sources += f' ./{generated_sources_dir}/glue_wrapper.cpp'
  # add dependencies that has no public class interfaces
  compiler_sources += ' ' + ' '.join([
    './adaptagrams/cola/libavoid/geometry.cpp',
    './adaptagrams/cola/libavoid/visibility.cpp',
    './adaptagrams/cola/libavoid/uniqueid.cpp'
  ])
  # sources for that bindings are not implemented yet
  compiler_sources += ' ' + ' '.join([
    './adaptagrams/cola/libavoid/viscluster.cpp',
    './adaptagrams/cola/libavoid/orthogonal.cpp',
    './adaptagrams/cola/libavoid/scanline.cpp',
    './adaptagrams/cola/libavoid/vpsc.cpp',
  ])

  pwd = Path('.').resolve()
  args = ''
  if debug:
    #  -s DISABLE_EXCEPTION_CATCHING=0
    args += ' -gsource-map --source-map-base http://localhost:8080/ -s RUNTIME_LOGGING=1 -s ASSERTIONS=1'
  else:
    args += '-O3 -s ASSERTIONS=1 -flto'  # -s DISABLE_EXCEPTION_CATCHING=0

  mjs = environment == 'node'
  # list of parameters: https://emsettings.surma.technology/
  execute_command(f"""
  docker run \
  --rm \
  -v {str(pwd)}:/src -w /src/ \
  -u {os.getuid()}:{os.getgid()} \
  emscripten/emsdk:3.1.36 \
  emcc {args} \
    --closure 1 \
    -fwasm-exceptions \
    -s LLD_REPORT_UNDEFINED \
    -s FILESYSTEM=0 \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s USE_ES6_IMPORT_META={'1' if mjs else '0'} \
    -s EXPORT_NAME="'initAvoidModule'" \
    -s ALLOW_TABLE_GROWTH=1 \
    -s ENVIRONMENT="{environment}" \
    --no-entry \
    -s ALLOW_MEMORY_GROWTH=1 \
    -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=$addFunction \
    -s EXPORTED_FUNCTIONS=['_malloc'] \
    -s ABORT_ON_WASM_EXCEPTIONS=1 \
    -Iadaptagrams/cola/ \
    -I{generated_sources_dir}/ \
    {compiler_sources} \
    {post_js_args} \
    -o {dist_dir_name}/libavoid.js
  """, logger)
  # -s CLOSURE_WARNINGS=error .. will show all warnings and errors, but also of emcc
  # -g .. for debug, -g4 is max level with source maps for browser
  # EXPORT_NAME ...  explanation: https://stackoverflow.com/a/30153119
  # source-map-base is required for browser recognition of source maps
  # -s STRICT=1 \
  # -s SAFE_HEAP=1 \
  # -fsanitize=address \
  # -e EMCC_AUTODEBUG=1 \


def main():
  """
  - run webidl binder to create c++/js bindings('glue') from .idl files
  - prepare content for glue wrapper and save it
  - run emcc compiler
  """
  # build directory
  try:
    os.mkdir('build')
  except FileExistsError:
    ...
  os.chdir('build')

  # build sources
  adaptagrams_sources_path = Path('./adaptagrams')
  if adaptagrams_sources_path.exists() != True or adaptagrams_sources_path.is_dir() != True:
    execute_command(f'git clone https://github.com/Aksem/adaptagrams.git -b v{ADAPTAGRAMS_VERSION}', logger)
    patch_adaptagrams_sources('./adaptagrams/')
  
  # build tools: webidl_binder
  webild_binder_sources_path = Path('./webidl-embindgen')
  if webild_binder_sources_path.exists() != True or webild_binder_sources_path.is_dir() != True:
    execute_command('git clone https://gitlab.com/Aksem/webidl-embindgen.git', logger)

  # remove old build data if exists
  logger.info('Remove old builds if they exist')
  dirs_to_recreate = [
    'generated_web',
    'generated_debug',
    'generated_node',
    'dist_debug',
    'dist_web',
    'dist_node',
    '../dist',
    '../examples/dist',
    '../examples/debug-src/generated',
    '../examples/debug-dist',
    '../src/generated'
  ]
  for dir_to_delete in dirs_to_recreate:
    try:
      rmtree(dir_to_delete)
    except FileNotFoundError:
      ...

  for dir_to_create in dirs_to_recreate:
    try:
      os.mkdir(dir_to_create)
    except FileExistsError:
      ...

  logger.info('Build debug version')
  output_dir = 'generated_debug'
  generate_bindings(output_dir, debug=True)
  compile(output_dir, 'dist_debug', debug=True)
  copyfile('dist_debug/libavoid.js', '../examples/debug-src/generated/libavoid.js')
  copyfile('dist_debug/libavoid.wasm', '../examples/debug-src/generated/libavoid.wasm')
  copyfile('dist_debug/libavoid.wasm.map', '../examples/debug-src/generated/libavoid.wasm.map')
  
  logger.info('Build API documentation')
  execute_command('npm run api-docs', logger, '../')

  logger.info('Build production version for web')
  output_dir = 'generated_web'
  generate_bindings(output_dir, debug=False)
  compile(output_dir, 'dist_web', debug=False)
  copyfile('dist_web/libavoid.js', '../src/generated/libavoid.js')
  copyfile('dist_web/libavoid.wasm', '../src/generated/libavoid.wasm')
  
  logger.info('Build production version for node')
  output_dir = 'generated_node'
  generate_bindings(output_dir, debug=False)
  compile(output_dir, 'dist_node', debug=False)
  # wasm is the same for all envs, copy only js
  copyfile('dist_node/libavoid.js', '../src/generated/libavoid.mjs')


if __name__ == '__main__':
  main()
