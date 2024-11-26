#!/usr/bin/env node

import { program } from 'commander';

const gendiff = () => {
  program
    .option('-f, --foo', 'enable some foo');
};

gendiff();
