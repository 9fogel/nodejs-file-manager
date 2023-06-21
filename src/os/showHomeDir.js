import os from 'os';

export const showHomeDir = () => {
  const userHomeDir = os.homedir();

  return `You are currently in ${userHomeDir}`
}