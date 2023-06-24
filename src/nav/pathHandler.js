import path from 'path';
import { workingDir } from './navigation.js';

let dirPath;

export const getDirPath = (enteredPath) => {
  if (path.isAbsolute(enteredPath)) {
    // console.log('path is abs', enteredPath);
    dirPath = path.resolve(enteredPath);
  } else {
    dirPath = path.resolve(workingDir.current, enteredPath);
  }

  return dirPath;
}