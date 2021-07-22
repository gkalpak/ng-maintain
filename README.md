# ng-maintain [![Build Status][build-status-image]][build-status]

## Description

A collection of command-line utilities to help maintain (AngularJS-related) GitHub repositories.

## Usage

The following command-line tools are included:

- **ngm-cla-check:** [ng-cla-check][ng-cla-check]'s `ng-cla-check`.
- **ngm-diff-wh:** A `git diff` alternative based on [ng-maintain-utils][ng-maintain-utils]'
  `GitUtils.diffWithHighlight()`. See [ng-maintain-utils][ng-maintain-utils] for more info.
- **ngm-diff-wh2:** A `git diff` alternative based on [ng-maintain-utils][ng-maintain-utils]'
  `GitUtils.diffWithHighlight2()`. See [ng-maintain-utils][ng-maintain-utils] for more info.
- **ngm-pr-merge:** [ng-pr-merge][ng-pr-merge]'s `ng-pr-merge`.

## Testing

The following test-types/modes are available:

- **Code-linting:** `npm run lint`
  _Lint JavaScript files using ESLint._

- **Unit tests:** `npm run test-unit`
  _Run all the unit tests once. These tests are quick and suitable to be run on every change._

- **E2E tests:** `npm run test-e2e`
  _Run all the end-to-end tests once. These test may hit actual API endpoints or perform expensive
  I/O operations and are considerably slower than unit tests._

- **All tests:** `npm test` / `npm run test`
  _Run all of the above tests (code-linting, unit tests, e2e tests). This command is automatically
  run before `npm version` and `npm publish`._

- **"Watch" mode:** `npm run test-watch`
  _Watch all files and rerun the unit tests whenever something changes. For performance reasons,
  code-linting and e2e tests are omitted._


[build-status]: https://github.com/gkalpak/ng-maintain/actions/workflows/ci.yml
[build-status-image]: https://github.com/gkalpak/ng-maintain/actions/workflows/ci.yml/badge.svg?branch=master&event=push
[ng-cla-check]: https://www.npmjs.com/package/@gkalpak/ng-cla-check
[ng-maintain-utils]: https://www.npmjs.com/package/@gkalpak/ng-maintain-utils
[ng-pr-merge]: https://www.npmjs.com/package/@gkalpak/ng-pr-merge
