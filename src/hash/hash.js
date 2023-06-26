import fs from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../nav/pathHandler.js';
import { showOutput as output } from '../utils/helpers.js';

const { createHash } = await import('crypto');

export const calculateHash = async (args) => {
  const filePath = getAbsolutePath(args);

  const hash = createHash('sha256');
  const readableStream = fs.createReadStream(filePath);

  readableStream.on('error', () => {
    console.error('Operation failed');
  });

  await pipeline(readableStream, hash.setEncoding('hex'), await output());
};