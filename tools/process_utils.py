import logging
import shlex
from subprocess import Popen, PIPE

def configure_logger():
  logger = logging.getLogger(__name__)
  # logger.setLevel('DEBUG')
  console_handler = logging.StreamHandler()
  formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
  console_handler.setFormatter(formatter)
  logger.addHandler(console_handler)
  return logger


def execute_command(command, logger, path=None, env=None):
  logger.debug(f'Execute command: {command}')
  process = Popen(shlex.split(command), stdout=PIPE, stderr=PIPE, cwd=path, env=env)
  (output, error) = process.communicate()
  exit_code = process.wait()
  output = output.decode('utf-8')
  error = error.decode('utf-8')
  logger.info(f'Exit code: {exit_code}\nOutput: {output}')
  if exit_code != 0:
    raise Exception(f'Process end:\n Error: {error}')
  return (process, output, error)