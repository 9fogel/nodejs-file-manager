import { showOSInfo } from "../os/osInfo.js";
import { goUp, goToFolder } from "../nav/navigation.js";
import { showList } from "../nav/list.js";
import { read, addFile, rename, copyFile , deleteFile, moveFile } from "../fs/files.js";
import { calculateHash } from "../hash/hash.js";
import { compressBrotli } from "../zip/brotli.js";
import { parseArgs as parseArguments } from "./parseArgs.js";

let operation;

export const parseUserInput = async (value) => {

  if (value.trim().includes(' ')) {
    const parsingList = value.split(' ');

    operation = parsingList[0];
    const parameters = parsingList.slice(1).join(' ');

    const parsedArgs = await parseArguments(parameters);

    if (parsedArgs.length === 1) {
      //switch for commands with 1 argument
      switch (operation) {
        case 'cd':
          await goToFolder(parsedArgs);
          break;
        case 'cat':
          await read(parsedArgs);
          break;
        case 'add':
          await addFile(parsedArgs);
          break;
        case 'rm':
          await deleteFile(parsedArgs);
          break;
        case 'os':
          await showOSInfo(parameters);
          break;
        case 'hash':
          await calculateHash(parsedArgs);
          break;
        default:
          console.log('Invalid input');
      }
    } else if (parsedArgs.length === 2) {
      //switch for commands with 2 arguments
      switch (operation) {
        case 'rn':
        await rename(parsedArgs);
        break;
      case 'cp':
        await copyFile(parsedArgs);
        break;
      case 'mv':
        await moveFile(parsedArgs);
        break;
      case 'compress':
        await compressBrotli('compress', parsedArgs);
        break;
      case 'decompress':
        await compressBrotli('decompress', parsedArgs);
        break;
      default:
        console.log('Invalid input');
      }
    } else {
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