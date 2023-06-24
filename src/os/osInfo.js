import os from 'os';

const userHomeDir = os.homedir();

export const showHomeDir = () => {
  return `You are currently in ${userHomeDir}\n`
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
      'model': item.model.split(' @ ')[0],
      'clockRate': item.model.split(' @ ')[1],
    }
  })
  console.log(`total CPUs: ${os.cpus().length}`);
  console.log(CPUInfo);
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
