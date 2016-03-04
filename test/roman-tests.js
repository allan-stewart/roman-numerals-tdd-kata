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
    testToRoman(4, 'IV');
    testToRoman(5, 'V');
    testToRoman(6, 'VI');
    testToRoman(7, 'VII');
    testToRoman(8, 'VIII');
    testToRoman(9, 'IX');
    testToRoman(10, 'X');
    testToRoman(11, 'XI');
    testToRoman(12, 'XII');
    testToRoman(13, 'XIII');
    testToRoman(14, 'XIV');
    testToRoman(15, 'XV');
    testToRoman(16, 'XVI');
    testToRoman(17, 'XVII');
    testToRoman(18, 'XVIII');
    testToRoman(19, 'XIX');
    testToRoman(20, 'XX');
    testToRoman(21, 'XXI');
    testToRoman(22, 'XXII');
    testToRoman(23, 'XXIII');
    testToRoman(24, 'XXIV');
    testToRoman(25, 'XXV');
    testToRoman(26, 'XXVI');
    testToRoman(27, 'XXVII');
    testToRoman(28, 'XXVIII');
    testToRoman(29, 'XXIX');
    testToRoman(30, 'XXX');
    testToRoman(31, 'XXXI');
    testToRoman(32, 'XXXII');
    testToRoman(33, 'XXXIII');
    testToRoman(34, 'XXXIV');
    testToRoman(35, 'XXXV');
    testToRoman(36, 'XXXVI');
    testToRoman(37, 'XXXVII');
    testToRoman(38, 'XXXVIII');
    testToRoman(39, 'XXXIX');
    testToRoman(40, 'XL');
    testToRoman(41, 'XLI');
    testToRoman(42, 'XLII');
    testToRoman(43, 'XLIII');
    testToRoman(44, 'XLIV');
    testToRoman(45, 'XLV');
    testToRoman(46, 'XLVI');
    testToRoman(47, 'XLVII');
    testToRoman(48, 'XLVIII');
    testToRoman(49, 'XLIX');
    testToRoman(50, 'L');
  });
});
