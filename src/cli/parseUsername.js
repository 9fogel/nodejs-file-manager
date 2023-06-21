const parseUserName = () => {
  let parsedArgs = process.argv.slice(2);

  if (parsedArgs.length === 0) {
    return 'Anonymous';
  } else {
    parsedArgs = parsedArgs.map((item) => {
      if (item.startsWith('--username')) {
        return item.slice(11).split('_').join(' ').trim();
      } else {
        return 'Anonymous';
      }
    })
      .toString();
  }

  return parsedArgs;
};

const userName = parseUserName();

export const sayHi = () => {
  console.log(`Welcome to the File Manager, ${userName}!`)
}

export const sayBye = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
}