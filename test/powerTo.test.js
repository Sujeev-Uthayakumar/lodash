import assert from 'assert';
import powerTo from '../powerTo';

describe('power', function() {
  it('should find power of positive base and positive exponent', function() {
    assert.strictEqual(powerTo(2, 3), 8);
  });

  it('should find power of positive base and negative exponent', function() {
    assert.strictEqual(powerTo(10, -2), 0.01);
  });

  it('should find power of negative base and positive exponent', function() {
    assert.strictEqual(powerTo(-10, 2), 100);
  });

  it('should find power of negative base and negative exponent', function() {
    assert.strictEqual(powerTo(-2, -2), 0.25);
  });
});
