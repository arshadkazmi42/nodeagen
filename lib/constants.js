const URLS = {
  npm: 'https://github.com/arshadkazmi42/npm-package'
};

const MESSAGES = {
  npm: {
    SUCCESS: 'NPM generated',
    FAILED: 'NPM failed to generate'
  }
};

const HELP = [
  {
    flag: 'npm',
    description: 'Generates NPM Package boilerplate'
  }, 
  {
    flag: 'help',
    description: 'Shows help'
  }
];


module.exports = {
  URLS,
  HELP,
  MESSAGES
};
