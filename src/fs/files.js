import fs from 'fs';
import { writeFile } from 'fs/promises';
import { getAbsolutePath } from "../nav/pathHandler.js";
import { isFile } from "../utils/helpers.js";

export const read = async (args) => {
  const filePath = getAbsolutePath(args);

  if (await isFile(filePath)) {
    const readableStream = fs.createReadStream(filePath);
    // let data = '';

    // readableStream.on('data', (chunk) => {
    //   data += chunk;
    // });

    // readableStream.on('end', () => {
    //   console.log(data);
    // });
    readableStream.pipe(process.stdout);
  // } else {
    // console.log(`path ${filePath} is not a file`);
    // throw new Error;
  }
};

export const addFile = async (args) => {
  const filePath = getAbsolutePath(args);
  await writeFile(filePath, '', { flag: 'wx' });
}

// const doesFileExist = async(path) => {
//   try {
//     await access(path);
//     return true;
//   } catch {
//     return false;
//   }
// }

export const rename = async (args) => {
  // try {
    console.log(args);

    const [ filePath, newName ] = args.split(' ');
    console.log(filePath);
    console.log(newName);
    //TODO: составить newPath

    // if (await doesFileExist(oldPath) && await doesFileExist(newPath)) {
    //   throw new Error('FS operation failed');
    // } else {
      // await renameFile(oldPath, newPath);
  //   }
  // } catch {
  //   throw new Error('FS operation failed');
  // }
};