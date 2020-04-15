const roman = require("../roman.js");

describe("roman", () => {
  describe("only one symbol", () => {
    [
      [1, "I"],
      [2, "II"],
      [3, "III"],
      [5, "V"],
      [10, "X"],
      [20, "XX"],
      [30, "XXX"],
      [50, "L"],
      [100, "C"],
      [300, "CCC"],
      [500, "D"],
      [1000, "M"],
      [3000, "MMM"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });

  describe("multiple symbols with normal case (addition)", () => {
    [
      [6, "VI"],
      [7, "VII"],
      [8, "VIII"],
      [11, "XI"],
      [16, "XVI"],
      [38, "XXXVIII"],
      [88, "LXXXVIII"],
      [800, "DCCC"],
      [3500, "MMMD"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });

  describe("multiple symbols with subtraction", () => {
    [
      [4, "IV"],
      [14, "XIV"],
      [34, "XXXIV"],
      [9, "IX"],
      [39, "XXXIX"],
      [40, "XL"],
      [44, "XLIV"],
      [49, "XLIX"],
      [90, "XC"],
      [94, "XCIV"],
      [99, "XCIX"],
      [400, "CD"],
      [490, "CDXC"],
      [900, "CM"],
      [949, "CMXLIX"],
      [2014, "MMXIV"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
