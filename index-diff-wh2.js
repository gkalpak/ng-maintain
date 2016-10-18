#!/usr/bin/env node
'use strict';

// Imports - Local
let diffWithHighlight = require('./lib/diff-with-highlight');

// Run
_main(process.argv.slice(2));

// Functions - Definitions
function _main(rawArgs) {
  diffWithHighlight(rawArgs, 2).
    then(() => process.exit(0), () => process.exit(1));
}
