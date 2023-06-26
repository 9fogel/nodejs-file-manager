import path from 'path';
import { workingDir } from './navigation.js';

let dirPath;

export const getAbsolutePath = (enteredPath) => {
  if (path.isAbsolute(enteredPath)) {
    dirPath = path.resolve(enteredPath);
  } else {
    if (enteredPath.length == 2 && enteredPath.endsWith(':')) {
      enteredPath += '/';
    }
    dirPath = path.resolve(workingDir.current, enteredPath);
  }

  console.log('pathHandler', dirPath);
  return dirPath;
}