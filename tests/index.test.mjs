import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.equal(api.narayana(4, 2), 6n);
});
test('row normalization', () => {
  const catalans = [1n, 1n, 2n, 5n, 14n, 42n, 132n, 429n];
  for (let n = 1; n < catalans.length; n++) {
    let sum = 0n;
    for (let k = 1; k <= n; k++) sum += api.narayana(n, k);
    assert.equal(sum, catalans[n]);
  }
});
test('empty convention', () => {
  assert.equal(api.narayana(0, 0), 1n);
});
test('outside support', () => {
  assert.equal(api.narayana(2, 3), 0n);
});
test('invalid parameters', () => {
  assert.throws(() => api.narayana(-1, 0));
  assert.throws(() => api.narayana(1001, 0));
});
test('type contract', () => {
  assert.throws(() => api.narayana('4', 2));
});
