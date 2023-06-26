import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { sayHi, sayBye } from "./cli/parseUsername.js";
import { parseUserInput } from './utils/parseUserInput.js';
import { userHomeDir } from './os/osInfo.js';
import { workingDir, setCWD } from './nav/navigation.js';

sayHi();

setCWD(userHomeDir);

const rl = readline.createInterface({ input, output });

const closeReadline = () => {
  sayBye();
  rl.close();
  process.exit();
}

const promptReadline = () => {
  rl.setPrompt(`\nYou are currently in ${workingDir.current}\n`)
  rl.prompt();
}

rl.on('line', async (input) => {
  try {
    if (input.trim() === '.exit') {
      closeReadline();
    } else {
      await parseUserInput(input);
      promptReadline();
    }
  } catch (error) {
    console.error('Operation failed');
    promptReadline();
  }
});

rl.on('SIGINT', () => {
  closeReadline();
});