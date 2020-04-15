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
      [49, "IL"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
