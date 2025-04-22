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
ADAPTAGRAMS_VERSION = "1.0.3"

logging.basicConfig()
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


def compile(generated_sources_dir, dist_dir_name, debug=False, environment: Literal["web"] | Literal["node"] = "web"):
  try:
    os.mkdir(dist_dir_name)
  except FileExistsError:
    ...

  compiler_sources = ''
  for source_file in SOURCE_FILES:
    compiler_sources += f' ./build/adaptagrams/cola/libavoid/{source_file}.cpp'
  
  # add dependencies that has no public class interfaces
  compiler_sources += ' ' + ' '.join([
    './build/adaptagrams/cola/libavoid/geometry.cpp',
    './build/adaptagrams/cola/libavoid/visibility.cpp',
    './build/adaptagrams/cola/libavoid/uniqueid.cpp'
  ])
  # sources for that bindings are not implemented yet
  compiler_sources += ' ' + ' '.join([
    './build/adaptagrams/cola/libavoid/viscluster.cpp',
    './build/adaptagrams/cola/libavoid/orthogonal.cpp',
    './build/adaptagrams/cola/libavoid/scanline.cpp',
    './build/adaptagrams/cola/libavoid/vpsc.cpp',
  ])

  args = ''
  if debug:
    #  -s DISABLE_EXCEPTION_CATCHING=0
    args += ' -gsource-map --source-map-base http://localhost:8080/ -s RUNTIME_LOGGING=1 -s ASSERTIONS=1'
  else:
    args += '-O3 -s ASSERTIONS=1 -flto'  # -s DISABLE_EXCEPTION_CATCHING=0

  libavoid_js_dir_path = Path(__file__).parent.parent.resolve()
  # list of parameters: https://emsettings.surma.technology/
  # ALLOW_TABLE_GROWTH and ALLOW_TABLE_GROWTH are needed for support of larger diagrams. Without them runtime is out of memory with ~10 shapes and 2 connections between all of them
  execute_command(f"""
  docker run \
  --rm \
  -v {str(libavoid_js_dir_path)}:/src -w /src/ \
  -u {os.getuid()}:{os.getgid()} \
  emscripten/emsdk:4.0.7 \
  emcc {args} \
    -lembind \
    -fwasm-exceptions \
    --closure 1 \
    -s LLD_REPORT_UNDEFINED \
    -s FILESYSTEM=0 \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s EXPORT_NAME="'initAvoidModule'" \
    -s ENVIRONMENT="{environment}" \
    -s ABORT_ON_WASM_EXCEPTIONS=1 \
    -s EXIT_RUNTIME=1 \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s ALLOW_TABLE_GROWTH=1 \
    -Ibuild/adaptagrams/cola/ \
    /src/embind/bindings.cpp \
    {compiler_sources} \
    -o /src/build/{dist_dir_name}/libavoid.js
  """, logger)
  # -s CLOSURE_WARNINGS=error .. will show all warnings and errors, but also of emcc
  # -g .. for debug, -g4 is max level with source maps for browser
  # EXPORT_NAME ...  explanation: https://stackoverflow.com/a/30153119
  # source-map-base is required for browser recognition of source maps
  # -s STRICT=1 \
  # -s SAFE_HEAP=1 \
  # -fsanitize=address \
  # -e EMCC_AUTODEBUG=1 \

  # old params:
  # --no-entry \
  # -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=$addFunction \
  # -s EXPORTED_FUNCTIONS=['_malloc'] \


def main():
  """
  Run emcc compiler
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
  compile(output_dir, 'dist_debug', debug=True)
  copyfile('dist_debug/libavoid.js', '../examples/debug-src/generated/libavoid.js')
  copyfile('dist_debug/libavoid.wasm', '../examples/debug-src/generated/libavoid.wasm')
  copyfile('dist_debug/libavoid.wasm.map', '../examples/debug-src/generated/libavoid.wasm.map')
  
  # logger.info('Build API documentation')
  # execute_command('npm run api-docs', logger, '../')

  logger.info('Build production version for web')
  output_dir = 'generated_web'
  compile(output_dir, 'dist_web', debug=False)
  copyfile('dist_web/libavoid.js', '../src/generated/libavoid.js')
  copyfile('dist_web/libavoid.wasm', '../src/generated/libavoid.wasm')

  logger.info('Build production version for node')
  output_dir = 'generated_node'
  compile(output_dir, 'dist_node', debug=False, environment='node')
  # wasm is the same for all envs, copy only js
  copyfile('dist_node/libavoid.js', '../src/generated/libavoid.mjs')


if __name__ == '__main__':
  main()
