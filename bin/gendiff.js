#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program.option('-f, --foo', 'enable some foo');

program.addHelpText(
  'after',
  `

Example call:
  $ custom-help --help`,
);

program.parse(process.argv);
