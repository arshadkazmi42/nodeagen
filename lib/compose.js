const logSymbols = require('log-symbols');
const chalk = require('chalk');
const _ = require('lodash');

const { GenerateNpm } = require('../generators');
const ShowHelp = require('./help');
const FormatMessage = require('./format-message');
const log = console.log;


const GENERATORS = {
  'npm': GenerateNpm,
  '--help': ShowHelp,
  'help': ShowHelp,
  '--h': ShowHelp
};

const compose = async (args) => {
  if (!args || args.length === 0) {
    return log(logSymbols.error, 'Missing parameter!!! \nTry --help flag to check usage');
  }

  // Filtering unique arguments
  args = _.uniqBy(args);

  for (let arg of args) {
    if (!GENERATORS[arg]) {
      log(logSymbols.error, FormatMessage.error(chalk.bgRed(arg), 'argument is not supported yet.'));
      continue;
    }

    await GENERATORS[arg](arg.toLowerCase());
  }
};


module.exports = compose;
