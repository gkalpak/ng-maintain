'use strict';

// Imports
let Jasmine = require('jasmine');

// Constants
const JASMINE_CONFIG = {
  random: true,
  spec_dir: getSpecDir(),
  spec_files: [
    '**/*.spec.js'
  ]
};

// Run
_main();

// Functions - Definitions
function _main() {
  let runner = new Jasmine();

  runner.loadConfig(JASMINE_CONFIG);
  runner.execute();
}

function getSpecDir() {
  let value = process.argv[2] || '';
  let match = /^"([^"]*)"$/.exec(value) || /^'([^']*)'$/.exec(value);

  return !match ? value : match[1];
}
