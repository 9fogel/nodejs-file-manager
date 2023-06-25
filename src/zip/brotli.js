import path from 'path';
import fs from 'fs';
import { createBrotliCompress, createBrotliDecompress} from 'zlib';
import { getAbsolutePath } from '../nav/pathHandler.js';

export const compressBrotli = async (action, args) => {
  const [filePath, newDirPath] = args.split(' ');

  const sourcePath = getAbsolutePath(filePath);
  const fileName = action === 'compress' ? path.basename(filePath) + '.br' : path.basename(filePath, '.br');
  const destinationPath = getAbsolutePath(path.join(newDirPath, fileName));

  const source = fs.createReadStream(sourcePath);
  const destination = fs.createWriteStream(destinationPath);

  let brotli;

  if (action === 'compress') {
    brotli = createBrotliCompress();
  } else {
    brotli = createBrotliDecompress();
  }

  const stream = source.pipe(brotli).pipe(destination);

  stream.on('error', () => {
    console.error('Operation failed');
  });
};
