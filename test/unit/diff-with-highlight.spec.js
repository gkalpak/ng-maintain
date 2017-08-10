'use strict';

// Imports
let ngMaintainUtils = require('@gkalpak/ng-maintain-utils');

let GitUtils = ngMaintainUtils.GitUtils;

// Imports - Local
let diffWithHighlight = require('../../lib/diff-with-highlight');

// Tests
describe('diffWithHighlight', () => {
  let deferred;
  let deferred2;

  beforeEach(() => {
    let promise = new Promise((resolve, reject) => deferred = {resolve, reject});
    let promise2 = new Promise((resolve, reject) => deferred2 = {resolve, reject});

    spyOn(GitUtils.prototype, 'diffWithHighlight').and.returnValue(promise);
    spyOn(GitUtils.prototype, 'diffWithHighlight2').and.returnValue(promise2);
  });

  it('should be a function', () => {
    expect(diffWithHighlight).toEqual(jasmine.any(Function));
  });

  it('should call `GitUtils.diffWithHighlight()` by default', () => {
    diffWithHighlight([]);

    expect(GitUtils.prototype.diffWithHighlight).toHaveBeenCalledTimes(1);
    expect(GitUtils.prototype.diffWithHighlight2).not.toHaveBeenCalled();

    diffWithHighlight([], 1);

    expect(GitUtils.prototype.diffWithHighlight).toHaveBeenCalledTimes(2);
    expect(GitUtils.prototype.diffWithHighlight2).not.toHaveBeenCalled();

    diffWithHighlight([], 'foo');

    expect(GitUtils.prototype.diffWithHighlight).toHaveBeenCalledTimes(3);
    expect(GitUtils.prototype.diffWithHighlight2).not.toHaveBeenCalled();
  });

  it('should call `GitUtils.diffWithHighlight2()` if called with `diffType: 2`', () => {
    diffWithHighlight([], 2);

    expect(GitUtils.prototype.diffWithHighlight2).toHaveBeenCalledWith(jasmine.any(String));
    expect(GitUtils.prototype.diffWithHighlight).not.toHaveBeenCalled();
  });

  it('should join the arguments and pass them to `GitUtils.diffWithHighlight[2]`', () => {
    diffWithHighlight(['foo', 'bar', 'baz', 'qux']);

    expect(GitUtils.prototype.diffWithHighlight).toHaveBeenCalledWith('foo bar baz qux');
    expect(GitUtils.prototype.diffWithHighlight2).not.toHaveBeenCalled();

    GitUtils.prototype.diffWithHighlight.calls.reset();
    GitUtils.prototype.diffWithHighlight2.calls.reset();

    diffWithHighlight(['foo', 'bar', 'baz', 'qux'], 2);

    expect(GitUtils.prototype.diffWithHighlight).not.toHaveBeenCalled();
    expect(GitUtils.prototype.diffWithHighlight2).toHaveBeenCalledWith('foo bar baz qux');
  });

  it('should return a promise', () => {
    expect(diffWithHighlight([])).toEqual(jasmine.any(Promise));
    expect(diffWithHighlight([], 2)).toEqual(jasmine.any(Promise));
  });

  describe('- Returned promise', () => {
    it('should resolve with the value from `GitUtils.diffWithHighlight[2]`', done => {
      let promise1 = diffWithHighlight([]).then(value => expect(value).toBe('foo'));
      let promise2 = diffWithHighlight([], 2).then(value => expect(value).toBe('bar'));

      deferred.resolve('foo');
      deferred2.resolve('bar');

      Promise.
        all([promise1, promise2]).
        then(done);
    });

    it('should reject with the error from `GitUtils.diffWithHighlight[2]`', done => {
      let promise1 = diffWithHighlight([]).
        then(() => Promise.reject(), value => expect(value).toBe('foo'));
      let promise2 = diffWithHighlight([], 2).
        then(() => Promise.reject(), value => expect(value).toBe('bar'));

      deferred.reject('foo');
      deferred2.reject('bar');

      Promise.
        all([promise1, promise2]).
        then(done);
    });
  });
});
