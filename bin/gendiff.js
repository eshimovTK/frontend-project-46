#!/usr/bin/env node

import { program } from 'commander';
import parser from '../parser.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const obj1 = parser(filepath1);
    const obj2 = parser(filepath2);
    console.log(obj1, obj2);
  });

program.parse();
