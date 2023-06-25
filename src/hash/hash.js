import fs from 'fs';
import { getAbsolutePath } from '../nav/pathHandler.js';

const { createHash } = await import('crypto');

export const calculateHash = async (args) => {
  const filePath = getAbsolutePath(args);

  const hash = createHash('sha256');
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};