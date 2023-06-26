import { access, stat } from 'fs/promises';
import { Writable } from 'stream';


const doesExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export const isFile = async (absolutePath) => {
  if (doesExist(absolutePath)) {
    const stats = await stat(absolutePath);
    return stats.isFile();
  } else {
    throw new Error(`File doesn't exist`);
  }
}

const isDirectory = async (enteredPath) => {
  const stats = await stat(absolutePath);

  return stats.isDirectory();
}

export const showOutput = async () => {
  return new Writable({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback(null);
    }
  });
}