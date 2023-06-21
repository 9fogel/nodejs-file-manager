import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { sayHi, sayBye } from "./cli/parseUsername.js";

sayHi();

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});

rl.on('SIGINT', () => {
  sayBye();
  rl.close();
});