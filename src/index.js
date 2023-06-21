import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { sayHi, sayBye } from "./cli/parseUsername.js";
import { parseUserInput } from './utils/parseUserInput.js';

sayHi();

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
  if (input.trim() === '.exit') {
    sayBye();
    rl.close();
    process.exit();
  } else {
    parseUserInput(input);
  }
});

rl.on('SIGINT', () => {
  sayBye();
  rl.close();
  process.exit();
});