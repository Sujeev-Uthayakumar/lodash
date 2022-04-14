import assert from 'assert';
import subtract from '../subtract.js';

describe('subtract', function() {
  it('should subtract two numbers', function() {
    assert.strictEqual(subtract(6, 4), 2);
    assert.strictEqual(subtract(-6, 4), -10);
    assert.strictEqual(subtract(-6, -4), -2);
  });

  it('should coerce arguments to numbers', function() {
    assert.strictEqual(subtract('6', '4'), 2);
  });

  it('should fail when arguments are not numbers', function() {
    assert.deepStrictEqual(subtract('x', 'y'), NaN);
    assert.deepStrictEqual(subtract('x', 4), NaN);
  });
});