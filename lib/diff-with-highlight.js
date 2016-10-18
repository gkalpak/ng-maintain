'use strict';

// Imports
let ngMaintainUtils = require('@gkalpak/ng-maintain-utils');

let CleanUper = ngMaintainUtils.CleanUper;
let GitUtils = ngMaintainUtils.GitUtils;
let Utils = ngMaintainUtils.Utils;

// Functions - Definitions
function diffWithHighlight(rawArgs) {
  let cleanUper = new CleanUper();
  let utils = new Utils();
  let gitUtils = new GitUtils(cleanUper, utils);

  let args = utils.parseArgs(rawArgs);
  let diffType = Number(args.type);
  let diffArgs = args._.join(' ');
  let methodName;

  switch (diffType) {
    case 2:
      methodName = 'diffWithHighlight2';
      break;
    default:
      methodName = 'diffWithHighlight';
      break;
  }

  return gitUtils[methodName](diffArgs);
}

// Exports
module.exports = diffWithHighlight;
