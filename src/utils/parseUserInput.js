import { showOSInfo } from "../os/osInfo.js";
import { goUp } from "../nav/navigation.js";
import { showList } from "../nav/list.js";

let operation;
let filePath;
let dirPath;
let destinationPath;
let fileName;
let parameters;

//TODO:At the start of the program and after each end of input/operation current working directory should be printed in following way: You are currently in path_to_working_directory

export const parseUserInput = async (value) => {
  value = value.trim();
  if (value.includes(' ')) {
    const parsingList = value.split(' ');

    operation = parsingList[0];
    parameters = parsingList.slice(1).join(' ');
    // console.log(parameters);

    switch (operation) {
      case 'cd':
        dirPath = parsingList[1];
        console.log(`Go to ${dirPath}`);
        break;
      case 'cat':
        filePath = parsingList[1];
        console.log(`Read ${filePath} and print it's content in console`);
        break;
      case 'add':
        fileName = parsingList[1];
        console.log(`Create empty ${fileName} in current working directory`);
        break;
      case 'rn':
        filePath = parsingList[1];
        fileName = parsingList[2];
        console.log(`Rename file from ${filePath} to ${fileName}`);
        break;
      case 'cp':
        filePath = parsingList[1];
        destinationPath = parsingList[2];
        console.log(`Copy file ${filePath} to ${destinationPath}`);
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
        // console.log( 'Print in console list of all files and folders in current directory');
        break;
      default:
        console.log('Invalid input');
    }
  }
}