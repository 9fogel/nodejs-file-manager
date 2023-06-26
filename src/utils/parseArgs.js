export const parseArgs = async (value) => {
  let parsedArgs = [];

  if (value.includes('"')) {
    const symbolsList = value.split('');

    let stack = [];
    let nameStr = '';

    symbolsList.forEach((char) => {
      if (char === '"') {
        if (!stack.includes('"') && !nameStr) {
          console.log(nameStr);
          stack.push(char);
        } else {
          stack.pop();
          if (nameStr.trim()) {
            parsedArgs.push(nameStr.trim());
          }
          nameStr = '';
        }
      } else {
        nameStr += char;
      }
    });

    if (nameStr) {
      parsedArgs.push(nameStr.trim());
    }
  } else {
    parsedArgs = value.split(' ');
  }

  return parsedArgs;
}