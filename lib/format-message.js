const chalk = require('chalk');


const success = (arg, message) => {
  return `${chalk.bgGreen(arg)}: ${message}`;
};


const error = (arg, message) => {
  return `${chalk.bgRed(arg)}: ${message}`;
};


module.exports = {
  success,
  error
};
