let operation;
let filePath;
let dirPath;
let destinationPath;
let fileName;
let osParameter;

export const parseUserInput = (value) => {
  if (value.includes(' ')) {
    const parsingList = value.split(' ');

    operation = parsingList[0];

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
        osParameter = parsingList[1];
        console.log(`Operating system info ${osParameter}`);
        break;
      default:
        console.log('Invalid input');
    }
  } else {
    operation = value;
    switch (operation) {
      case 'up':
        console.log( 'Go upper from current directory');
        break;
      case 'ls':
        console.log( 'Print in console list of all files and folders in current directory');
        break;
      default:
        console.log('Invalid input');
    }
  }
}