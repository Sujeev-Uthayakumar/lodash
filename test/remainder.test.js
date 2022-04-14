import assert from 'assert';
import remainder from '../remainder';

describe('remainder', function() {
  it('should find remainder of positive dividend and positive divisor', function() {
    assert.strictEqual(remainder(13, 5), 3);
  });

  it('should find remainder of positive dividend and negative divisor', function() {
    assert.strictEqual(remainder(11, -5), 1);
  });

  it('should find remainder of negative dividend and positive divisor', function() {
    assert.strictEqual(remainder(-19, 2), -1);
  });

  it('should find remainder of negative dividend and negative divisor', function() {
    assert.strictEqual(remainder(-5, -4), -1);
  });
});
