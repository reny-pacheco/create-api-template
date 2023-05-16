import path from 'path';
import { execa } from 'execa';
import ora from 'ora';
import { CLIResults } from '../types.js';

export const installDependencies = async ({ appName }: CLIResults) => {
  const projectRootDir = path.join(process.cwd(), appName);
  const spinner = ora('Installing dependencies\n').start();
  try {
    const pkgManager = 'npm';
    await execa(pkgManager, ['install'], { cwd: projectRootDir });

    spinner.succeed('Dependencies installed successfully');
  } catch (error) {
    spinner.fail('Error while installing dependencies');
    console.log(error);
  }
};
