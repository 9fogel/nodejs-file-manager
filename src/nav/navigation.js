import path from 'path';
import { getAbsolutePath } from './pathHandler.js';

export const workingDir = {
  current: process.cwd(),
};

export const setCWD = async (dir) => {
  process.chdir(dir);

  const currentWorkingDir = process.cwd();
  workingDir.current = currentWorkingDir;

  return currentWorkingDir;
}

export const goUp = async () => {
  const currentWorkingDir = workingDir.current;
  const dirAbovePath = path.join(currentWorkingDir, '..');

  await setCWD(dirAbovePath);
}

export const goToFolder = async (args) => {
  const directory = args[0];
  const dirPath = getAbsolutePath(directory);

  await setCWD(dirPath);
}