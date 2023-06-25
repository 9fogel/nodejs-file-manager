import path from 'path';
import { workingDir } from './navigation.js';

let dirPath;

export const getAbsolutePath = (enteredPath) => {
  if (path.isAbsolute(enteredPath)) {
    // console.log('path is abs', enteredPath);
    dirPath = path.resolve(enteredPath);
  } else {
    dirPath = path.join(workingDir.current, enteredPath);
  }

  return dirPath;
}