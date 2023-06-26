import fs from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../nav/pathHandler.js';
import { showOutput as output } from '../utils/helpers.js';

const { createHash } = await import('crypto');

export const calculateHash = async (args) => {
  const filePath = getAbsolutePath(args[0]);

  const hash = createHash('sha256');
  const readableStream = fs.createReadStream(filePath);

  await pipeline(readableStream, hash.setEncoding('hex'), await output());
};