#!/usr/bin/env node

import { program } from 'commander';
import _ from 'lodash';
import parser from '../parser.js';

const gendiff = (file1, file2) => {
  const obj1 = { ...file1 };
  const obj2 = { ...file2 };
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keysSort = _.uniq(keys1.concat(keys2)).sort();
  console.log('{');
  for (const key of keysSort) {
    if (obj2[key] === undefined) {
      console.log(`  - ${key}: ${obj1[key]}`);
      continue;
    }
    if (obj1[key] === obj2[key]) {
      console.log(`    ${key}: ${obj1[key]}`);
      continue;
    }
    if (obj2[key] !== obj1[key] && obj1[key] !== undefined) {
      console.log(`  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`);
      continue;
    }
    if (obj2[key] !== obj1[key] && obj1[key] === undefined) {
      console.log(`  + ${key}: ${obj2[key]}`);
    }
  }
  console.log('}');
};

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const obj1 = JSON.parse(parser(filepath1));
    const obj2 = JSON.parse(parser(filepath2));
    gendiff(obj1, obj2);
  });

program.parse();
