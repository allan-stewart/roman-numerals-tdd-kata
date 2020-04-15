const roman = require("../roman.js");

describe("roman", () => {
  describe("only I symbol", () => {
    test("should convert 1 to I", () => {
      const result = roman.toRoman(1);

      expect(result).toBe("I");
    });

    test("should convert 2 to II", () => {
      const result = roman.toRoman(2);

      expect(result).toBe("II");
    });

    test("should convert 3 to III", () => {
      const result = roman.toRoman(3);

      expect(result).toBe("III");
    });
  });

  describe("only V symbol", () => {
    test("should convert 5 to V", () => {
      const result = roman.toRoman(5);

      expect(result).toBe("V");
    });
  });

  describe("only X symbol", () => {
    test("should convert 10 to X", () => {
      const result = roman.toRoman(10);

      expect(result).toBe("X");
    });

    test("should convert 20 to XX", () => {
      const result = roman.toRoman(20);

      expect(result).toBe("XX");
    });

    test("should convert 30 to XXX", () => {
      const result = roman.toRoman(30);

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

  describe('multiple symbols with subtraction only', () => {
    test('should convert 4 to IV', () => {
      const result = roman.toRoman(4);

      expect(result).toBe('IV');
    });

    test('should convert 14 to XIV', () => {
      const result = roman.toRoman(14);

      expect(result).toBe('XIV');
    });

    test('should convert 34 to XIV', () => {
      const result = roman.toRoman(34);

      expect(result).toBe('XXXIV');
    });

    test('should convert 9 to IX', () => {
      const result = roman.toRoman(9);

      expect(result).toBe('IX');
    });

    test('should convert 39 to XXXIX', () => {
      const result = roman.toRoman(39);

      expect(result).toBe('XXXIX');
    });
  });
});
