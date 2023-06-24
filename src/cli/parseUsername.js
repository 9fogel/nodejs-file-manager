import { showHomeDir } from "../os/osInfo.js";

const parseUserName = () => {
  let parsedArgs = process.argv.slice(2);

  if (parsedArgs.length === 1) {
    parsedArgs = parsedArgs
      .map((item) => {
        if (item.startsWith('--username')) {
          return item.slice(11).split('_').join(' ').trim();
        } else {
          return 'Anonymous';
        }
      })
      .toString();
  } else {
    parsedArgs = 'Anonymous'
  }

  return parsedArgs;
};

const userName = parseUserName();
const homeDirMessage = showHomeDir();

export const sayHi = () => {
  console.log(`Welcome to the File Manager, ${userName}!\n\n${homeDirMessage}`)
}

export const sayBye = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
}