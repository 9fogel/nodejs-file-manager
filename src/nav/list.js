import path from 'path';
import { readdir } from 'fs/promises';
import { workingDir } from "./navigation.js";

export const showList = async () => {
  let fileList = await readdir(workingDir.current, { withFileTypes: true });
  fileList = fileList
  .filter((item) => !item.isSymbolicLink())
  .map((item) => {
    const extension = path.extname(path.join(workingDir.current, item.name));
    return {
      name: item.isDirectory() ? item.name : item.name + extension,
      type: item.isDirectory() ? 'directory' : 'file',
    }
  });

  const sortedFileList = fileList.sort((a, b) => {
    if (a.type === b.type) {
      return a.name < b.name ? -1 : 1
    } else {
      return a.type < b.type ? -1 : 1
    }
  });

  console.table(sortedFileList);
}