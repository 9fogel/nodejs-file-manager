const parseUserName = () => {
  const parsedArgs = process.argv.slice(2)
  .map((item) => {
    if (item.startsWith('--username')) {
      return item.slice(11).split('_').join(' ').trim();
    } else {
      return 'Anonymous';
    }
  })
  .toString();

  return parsedArgs;
};

const userName = parseUserName();

export const showGreeting = () => {
  console.log(`Welcome to the File Manager, ${userName}!`)
}