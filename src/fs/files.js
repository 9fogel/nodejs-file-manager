import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { writeFile, rename as renameFile, rm } from 'fs/promises';
import { getAbsolutePath } from "../nav/pathHandler.js";
import { isFile, showOutput as output } from "../utils/helpers.js";

export const read = async (args) => {
  const filePath = getAbsolutePath(args);

  if (await isFile(filePath)) {
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8'});

    readableStream.on('error', () => {
      console.error('Operation failed');
    });

    await pipeline(readableStream, await output());
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

export const copyFile = async (args) => {
  const [ filePath, newDirPath ] = args.split(' ');

  const oldPath = getAbsolutePath(filePath);
  const fileName = path.basename(filePath);
  const newPath = getAbsolutePath(path.join(newDirPath, fileName));

  const readableStream = fs.createReadStream(oldPath);
  const writableStream = fs.createWriteStream(newPath);

  readableStream.on('error', () => {
    console.error('Operation failed');
  });

  writableStream.on('error', () => {
    console.error('Operation failed');
  });

  readableStream.pipe(writableStream);
}

export const deleteFile = async (args) => {
  const filePath = getAbsolutePath(args);
  await rm(filePath);
}

export const moveFile = async (args) => {
  const filePath = args.split(' ')[0];

  await copyFile(args);
  await deleteFile(getAbsolutePath(filePath));
}