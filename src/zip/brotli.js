import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress} from 'zlib';
import { getAbsolutePath } from '../nav/pathHandler.js';

export const compressBrotli = async (action, args) => {
  const [filePath, newDirPath] = args;

  const sourcePath = getAbsolutePath(filePath);
  const fileName = action === 'compress' ? path.basename(filePath) + '.br' : path.basename(filePath, '.br');
  const destinationPath = getAbsolutePath(path.join(newDirPath, fileName));

  const source = fs.createReadStream(sourcePath);
  const destination = fs.createWriteStream(destinationPath);

  let brotli;

  if (action === 'compress') {
    brotli = createBrotliCompress();
  } else if (action === 'decompress') {
    brotli = createBrotliDecompress();
  }

  await pipeline(source, brotli, destination);
};
