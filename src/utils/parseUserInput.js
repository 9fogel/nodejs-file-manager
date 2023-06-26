import { showOSInfo } from "../os/osInfo.js";
import { goUp, goToFolder } from "../nav/navigation.js";
import { showList } from "../nav/list.js";
import { read, addFile, rename, copyFile , deleteFile, moveFile } from "../fs/files.js";
import { calculateHash } from "../hash/hash.js";
import { compressBrotli } from "../zip/brotli.js";

let operation;
let parameters;

export const parseUserInput = async (value) => {
  // value = value.trim();

  if (value.trim().includes(' ')) {
    const parsingList = value.split(' ');

    operation = parsingList[0];
    parameters = parsingList.slice(1).join(' ');
    // console.log(parameters);

    switch (operation) {
      case 'cd':
        await goToFolder(parameters);
        break;
      case 'cat':
        await read(parameters);
        break;
      case 'add':
        await addFile(parameters);
        break;
      case 'rn':
        await rename(parameters);
        break;
      case 'cp':
        await copyFile(parameters);
        break;
      case 'mv':
        await moveFile(parameters);
        break;
      case 'rm':
        await deleteFile(parameters);
        break;
      case 'os':
        await showOSInfo(parameters);
        break;
      case 'hash':
        await calculateHash(parameters);
        break;
      case 'compress':
        await compressBrotli('compress', parameters);
        break;
      case 'decompress':
        await compressBrotli('decompress', parameters);
        break;
      default:
        console.log('Invalid input');
    }
  } else {
    operation = value;
    switch (operation) {
      case 'up':
        await goUp();
        break;
      case 'ls':
        await showList();
        break;
      default:
        console.log('Invalid input');
    }
  }
}