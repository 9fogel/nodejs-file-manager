import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { writeFile, rename as renameFile, rm } from 'fs/promises';
import { getAbsolutePath } from "../nav/pathHandler.js";
import { doesExist, isFile, showOutput as output } from "../utils/helpers.js";

export const read = async (args) => {
  const filePath = getAbsolutePath(args[0]);

  if (await isFile(filePath)) {
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8'});
    await pipeline(readableStream, await output());
  }
};

export const addFile = async (args) => {
  const filePath = getAbsolutePath(args[0]);
  await writeFile(filePath, '', { flag: 'wx' });
}

export const rename = async (args) => {
    const [ filePath, newName ] = args;

    const oldPath = getAbsolutePath(filePath);
    const fileDirectory = path.parse(oldPath).dir;
    const newPath = getAbsolutePath(path.join(fileDirectory, newName));

    if (await doesExist(oldPath) && await doesExist(newPath)) {
      throw new Error('File already exists');
    } else {
      await renameFile(oldPath, newPath);
    }
};

export const copyFile = async (args) => {
  const [ filePath, newDirPath ] = args;

  const oldPath = getAbsolutePath(filePath);
  const fileName = path.basename(filePath);
  const newPath = getAbsolutePath(path.join(newDirPath, fileName));

  if (await doesExist(oldPath) && !await doesExist(newPath)) {
    const readableStream = fs.createReadStream(oldPath);
    const writableStream = fs.createWriteStream(newPath);
    await pipeline(readableStream, writableStream);
  } else {
    throw new Error('No source file or file with such name already exists');
  }
}

export const deleteFile = async (args) => {
  const filePath = getAbsolutePath(args[0]);
  await rm(filePath);
}

export const moveFile = async (args) => {
  await copyFile(args);
  await deleteFile(args);
}