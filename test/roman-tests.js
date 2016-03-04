var roman = require('../roman.js');
var assert = require('assert');

describe('roman', function () {
  describe('toRoman', function () {

    function testToRoman(input, expected) {
      it('should convert ' + input + ' to ' + expected, function () {
        var result = roman.toRoman(input);
        assert.equal(result, expected);
      });
    }
    
    testToRoman(1, 'I');
    testToRoman(2, 'II');
    testToRoman(3, 'III');
  });
});
