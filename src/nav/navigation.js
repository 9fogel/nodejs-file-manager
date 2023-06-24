import path from 'path';

export const workingDir = {
  current: process.cwd(),
}

export const setCWD = async (dir) => {
  process.chdir(dir);

  const currentWorkingDir = process.cwd();
  workingDir.current = currentWorkingDir;

  return currentWorkingDir;
}

export const goUp = async () => {
  // const currentWorkingDir = process.cwd();
  const currentWorkingDir = workingDir.current;
  const dirAbovePath = path.join(currentWorkingDir, '..');

  setCWD(dirAbovePath);
}