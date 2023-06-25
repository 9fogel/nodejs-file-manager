import fs from 'fs';
import path from 'path';
import { writeFile, rename as renameFile } from 'fs/promises';
import { getAbsolutePath } from "../nav/pathHandler.js";
import { isFile } from "../utils/helpers.js";

export const read = async (args) => {
  const filePath = getAbsolutePath(args);

  if (await isFile(filePath)) {
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8'});

    readableStream.pipe(process.stdout);

    // let data = '';

    // readableStream.on('data', (chunk) => {
    //   data += chunk;
    // });

    // readableStream.on('end', () => {
    //   console.log(data);
    // });
  }
};

export const addFile = async (args) => {
  const filePath = getAbsolutePath(args);
  await writeFile(filePath, '', { flag: 'wx' });
}

export const rename = async (args) => {
    const [ filePath, newName ] = args.split(' ');

    const oldPath = getAbsolutePath(filePath);
    const fileDirectory = path.parse(oldPath).dir;
    const newPath = getAbsolutePath(path.join(fileDirectory, newName));

    if (await doesFileExist(oldPath) && await doesFileExist(newPath)) {
      throw new Error('File already exists');
    } else {
      await renameFile(oldPath, newPath);
    }
};