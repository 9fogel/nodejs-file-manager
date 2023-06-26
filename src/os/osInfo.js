import os from 'os';

export const userHomeDir = os.homedir();

export const showHomeDir = () => {
  return `You are currently in ${userHomeDir}\n`;
}

export const showOSInfo = async (args) => {
  switch (args) {
    case '--EOL':
      await printEOL();
      break;
    case '--cpus':
      await printCPUs();
      break;
    case '--homedir':
      await printHomedir();
      break;
    case '--username':
      await printSystemUsername();
      break;
    case '--architecture':
      await printCPUArchitecture();
      break;
    default:
      console.log('Invalid input');
  }
}

const printEOL = async () => {
  console.log(JSON.stringify(os.EOL));
}

const printCPUs = async () => {
  const CPUInfo = os.cpus().map((item) => {
    return {
      'model': item.model,
      'clockRate': `${item.speed * 0.001} GHz`,
    }
  });
  console.log(CPUInfo);
  console.log(`total CPUs: ${os.cpus().length}`);
}

const printHomedir = async () => {
  console.log(userHomeDir);
}

const printSystemUsername = async () => {
  console.log(os.userInfo().username);
}

const printCPUArchitecture = async () => {
  console.log(os.arch());
}
