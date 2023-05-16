import path from 'path';
import fs from 'fs-extra';
import ora from 'ora';
import chalk from 'chalk';
import { PKG_ROOT } from '../const.js';
import { CLIResults } from '../types.js';

export const scaffoldProject = async ({ appName, projectType }: CLIResults) => {
  const spinner = ora(
    `Scaffolding in ${chalk.yellow.bold(appName)} with ${chalk.yellow.bold(
      projectType
    )}`
  ).start();
  try {
    const srcDir = path.join(PKG_ROOT, 'dist',  'templates', projectType);
    const projectDir = path.resolve(process.cwd(), appName);

    await fs.copy(srcDir, projectDir);
    spinner.succeed(
      `Scaffolding complete in ${chalk.yellow.bold(
        appName
      )} with ${chalk.yellow.bold(projectType)}`
    );
  } catch (err) {
    spinner.fail('Error while scaffolding project');
    console.log(err)
    
  }
};
