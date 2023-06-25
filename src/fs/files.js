import fs from 'fs';
import { writeFile } from 'fs/promises';
import { getAbsolutePath } from "../nav/pathHandler.js";
import { isFile } from "../utils/helpers.js";

export const read = async (args) => {
  const filePath = getAbsolutePath(args);

  if (isFile(filePath)) {
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