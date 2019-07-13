const { HELP } = require('./constants');


const showHelp = () => {
  console.table(HELP, ['flag', 'description']);
};


module.exports = showHelp;
