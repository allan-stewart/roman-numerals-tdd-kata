var roman = require("../roman.js");

describe("roman", () => {
  describe("only I symbol", () => {
    test("should convert 1 to I", () => {
      var result = roman.toRoman(1);

      expect(result).toBe("I");
    });

    test("should convert 2 to II", () => {
      var result = roman.toRoman(2);

      expect(result).toBe("II");
    });

    test("should convert 3 to III", () => {
      var result = roman.toRoman(3);

      expect(result).toBe("III");
    });
  });

  describe("only V symbol", () => {
    test("should convert 5 to V", () => {
      var result = roman.toRoman(5);

      expect(result).toBe("V");
    });
  });

  describe("only X symbol", () => {
    test("should convert 10 to X", () => {
      var result = roman.toRoman(10);

      expect(result).toBe("X");
    });

    test("should convert 20 to XX", () => {
      var result = roman.toRoman(20);

      expect(result).toBe("XX");
    });

    test("should convert 30 to XXX", () => {
      var result = roman.toRoman(30);

      expect(result).toBe("XXX");
    });
  });

  describe("multiple symbols with addition only", () => {
    test('should convert 6 to VI', () => {
      const result = roman.toRoman(6);

      expect(result).toBe('VI');
    });

    test('should convert 7 to VII', () => {
      const result = roman.toRoman(7);

      expect(result).toBe('VII');
    });

    test('should convert 8 to VIII', () => {
      const result = roman.toRoman(8);

      expect(result).toBe('VIII');
    });

    test('should convert 11 to XI', () => {
      const result = roman.toRoman(11);

      expect(result).toBe('XI');
    });

    test('should convert 16 to XVI', () => {
      const result = roman.toRoman(16);

      expect(result).toBe('XVI');
    });

    test('should convert 38 to XXXVIII', () => {
      const result = roman.toRoman(38);

      expect(result).toBe('XXXVIII');
    });
  });
});
