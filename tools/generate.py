import logging
import os
from pathlib import Path
from shutil import copytree, rmtree

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
  'router',
]

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


def generate_bindings(debug=False):
  output_dir = 'generated'
  if debug:
    output_dir += '_debug'
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


def compile(debug=False):
  dist_dir_name = 'dist'
  generated_sources_dir = 'generated'
  if debug:
    dist_dir_name += '_debug'
    generated_sources_dir += '_debug'
  try:
    os.mkdir(dist_dir_name)
  except FileExistsError:
    ...

  post_js_args = ''
  compiler_sources = ''
  post_js_args += f' --post-js ./{generated_sources_dir}/glue.js'
  for source_file in SOURCE_FILES:
    compiler_sources += f' ./adaptagrams/cola/libavoid/{source_file}.cpp'
  
  compiler_sources += f' ./{generated_sources_dir}/glue_wrapper.cpp'
  # add dependencies that has no public class interfaces
  compiler_sources += ' ' + ' '.join([
    './adaptagrams/cola/libavoid/geometry.cpp',
    './adaptagrams/cola/libavoid/visibility.cpp'
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
    args += ' -g4 --source-map-base http://localhost:8080/lib/ -s RUNTIME_LOGGING=1'
  else:
    args += '-g2 -O3'

  execute_command(f"""
  docker run \
  --rm \
  -v {str(pwd)}:/src -w /src/ \
  -u {os.getuid()}:{os.getgid()} \
  emscripten/emsdk \
  emcc {args} --closure 1 -s LLD_REPORT_UNDEFINED -flto -s FILESYSTEM=0 -s MODULARIZE=1 -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=0 -s EXPORT_NAME="'initAvoidModule'" -s ALLOW_TABLE_GROWTH=1 --no-entry -Iadaptagrams/cola/ -I{generated_sources_dir}/ {compiler_sources} {post_js_args} -o {dist_dir_name}/libavoid.js
  """, logger)
  # -s CLOSURE_WARNINGS=error .. will show all warnings and errors, but also of emcc
  # -g .. for debug, -g4 is max level with source maps for browser
  # EXPORT_NAME ...  explanation: https://stackoverflow.com/a/30153119
  # source-map-base is required for browser recognition of source maps


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
    execute_command('git clone https://github.com/Aksem/adaptagrams.git', logger)
    patch_adaptagrams_sources('./adaptagrams/')
  
  # build tools: webidl_binder
  webild_binder_sources_path = Path('./webidl-embindgen')
  if webild_binder_sources_path.exists() != True or webild_binder_sources_path.is_dir() != True:
    execute_command('git clone https://gitlab.com/Aksem/webidl-embindgen.git', logger)

  # remove old build data if exists
  logger.info('Remove old builds if they exist')
  try:
    rmtree('generated')
  except FileNotFoundError:
    ...
  
  try:
    rmtree('generated_debug')
  except FileNotFoundError:
    ...

  try:
    rmtree('dist')
  except FileNotFoundError:
    ...

  try:
    rmtree('dist_debug')
  except FileNotFoundError:
    ...

  try:
    rmtree('../dist')
  except FileNotFoundError:
    ...

  try:
    rmtree('../examples/lib/')
  except FileNotFoundError:
    ...

  try:
    os.mkdir('generated')
  except FileExistsError:
    ...
  try:
    os.mkdir('generated_debug')
  except FileExistsError:
    ...

  logger.info('Build debug version')
  generate_bindings(debug=True)
  compile(debug=True)
  copytree('dist_debug', '../examples/lib/', dirs_exist_ok=True)

  logger.info('Build API documentation')
  execute_command('npm run api-docs', logger, '../')

  logger.info('Build production version')
  generate_bindings(debug=False)
  compile(debug=False)
  copytree('dist', '../src/generated/', dirs_exist_ok=True)


if __name__ == '__main__':
  main()
