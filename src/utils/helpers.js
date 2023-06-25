import { stat } from 'fs/promises';

export const isFile = async(absolutePath) => {
  try {
    const stats = await stat(absolutePath);

    return stats.isFile();
  } catch {
    console.error('Operation failed');
  //   throw new Error(err.message);
  }
}

const isDirectory = async(enteredPath) => {
  const stats = await stat(absolutePath);

  return stats.isDirectory();
}