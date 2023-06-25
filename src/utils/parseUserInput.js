import { showOSInfo } from "../os/osInfo.js";
import { goUp, goToFolder } from "../nav/navigation.js";
import { showList } from "../nav/list.js";
import { read, addFile, rename, copyFile } from "../fs/files.js";

let operation;
let filePath;
let destinationPath;
let fileName;
let parameters;

export const parseUserInput = async (value) => {
  value = value.trim();

  if (value.includes(' ')) {
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
        filePath = parsingList[1];
        destinationPath = parsingList[2];
        console.log(`Move file ${filePath} to ${destinationPath}`);
        break;
      case 'rm':
        fileName = parsingList[1];
        console.log(`Delete file ${fileName}`);
        break;
      case 'os':
        await showOSInfo(parameters);
        break;
      case 'hash':
        filePath = parsingList[1];
        console.log(`Calculate hash for ${filePath} and print it into console`);
        break;
      case 'compress':
        filePath = parsingList[1];
        destinationPath = parsingList[2];
        console.log(`Compress file from ${filePath} to ${destinationPath} (using Brotli algorithm and Streams)`);
        break;
      case 'decompress':
        filePath = parsingList[1];
        destinationPath = parsingList[2];
        console.log(`Compress file from ${filePath} to ${destinationPath} (using Brotli algorithm and Streams)`);
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