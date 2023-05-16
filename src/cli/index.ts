import { Command } from 'commander';
import inquirer from 'inquirer';
import { CLIResults } from '../types.js';

const defaultOptions: CLIResults = {
  appName: '',
  projectType: '',
};

const availableDBs = ['express', 'fastify'] as const;

export const getCLIOptions = async () => {
  const cliOptions = defaultOptions;
  const program = new Command().name('Create Project');

  program
    .argument('[dir]', 'Name of your application')
    .option(
      '--express [boolean]',
      'Use express template',
      (value) => !!value && value !== 'false'
    )
    .option(
      '--fastify [boolean]',
      'Use fastify template',
      (value) => !!value && value !== 'false'
    )
    .addHelpText('afterAll', '\nDeveloped by Reny Pacheco\n')
    .parse(process.argv);

  program.parse(process.argv);
  const appName = program.args[0];
  const { express, fastify } = program.opts();

  if (express && fastify) throw new Error('Choose only one template');

  if (express) {
    cliOptions.projectType = 'express';
  }

  if (fastify) {
    cliOptions.projectType = 'fastify';
  }

  if (appName) {
    cliOptions.appName = appName;
  } else {
    cliOptions.appName = await promptProjectName();
  }

  if (!cliOptions.projectType) {
    cliOptions.projectType = await promptProjectType();
  }

  return cliOptions;
};

const promptProjectType = async (): Promise<'fastify' | 'express'> => {
  const { projectType } = await inquirer.prompt<{
    projectType: 'fastify' | 'express';
  }>({
    name: 'projectType',
    type: 'list',
    message: 'Please choose a project type',
    choices: availableDBs,
    default: 'express',
  });
  return projectType;
};

const promptProjectName = async (): Promise<string> => {
  const { appName } = await inquirer.prompt<Pick<CLIResults, 'appName'>>({
    name: 'appName',
    type: 'input',
    message: 'What will your project be called?',
    default: 'server',
    transformer: (input: string) => input.trim(),
  });
  return appName;
};
