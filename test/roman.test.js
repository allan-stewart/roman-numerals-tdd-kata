const roman = require("../roman.js");

describe("roman", () => {
  describe("only I symbol", () => {
    [
      [1, "I"],
      [2, "II"],
      [3, "III"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });

  describe("only V symbol", () => {
    test("should convert 5 to V", () => {
      const result = roman.toRoman(5);

      expect(result).toBe("V");
    });
  });

  describe("only X symbol", () => {
    [
      [10, "X"],
      [20, "XX"],
      [30, "XXX"],
    ].forEach(([input, expectedResult]) => {
      test(`should convert ${input} to ${expectedResult}`, () => {
        const result = roman.toRoman(input);

        expect(result).toBe(expectedResult);
      });
    });
  });

  describe("only L symbol", () => {
    test("should convert 50 to L", () => {
      const result = roman.toRoman(50);

      expect(result).toBe("L");
    });
  });

  describe("multiple symbols with addition only", () => {
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

  describe("multiple symbols with subtraction only", () => {
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
