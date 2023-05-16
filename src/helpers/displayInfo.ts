import chalk from 'chalk';

export const displayInfo = (appName: string) => {
  console.log(
    `\n Start the app by running: \n\t${chalk.cyan.bold(
      `cd ${appName}`
    )}\n\t${chalk.cyan.bold('npm run dev')}\n`
  );
};
