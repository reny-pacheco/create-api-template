#! /usr/bin/env node

import { getCLIOptions } from './cli/index.js';
import {
  installDependencies,
  displayInfo,
  scaffoldProject,
} from './helpers/index.js';

export const start = async () => {
  const data = await getCLIOptions();

  await scaffoldProject(data);
  await installDependencies(data);
  displayInfo(data.appName);
};

await start();
