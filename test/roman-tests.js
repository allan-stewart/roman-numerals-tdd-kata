var roman = require('../roman.js');
var assert = require('assert');

describe('roman', function () {
  describe('toRoman', function () {
    it('should convert 1 to I', function () {
      var result = roman.toRoman(1);
      assert.equal(result, 'I');
    });
  });
});
