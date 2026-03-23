const calc = require('../calculator');

// Tests for calculator functions: addition (+), subtraction (-), multiplication (*), division (/)

describe('Calculator basic operations', () => {
  test('2 + 3 equals 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('10 - 4 equals 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('45 * 2 equals 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('20 / 5 equals 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  // New operation tests
  test('5 % 2 equals 1 (modulo)', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('2 ^ 3 equals 8 (power)', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('square root of 16 equals 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });
});

describe('Calculator edge cases', () => {
  test('division by zero throws', () => {
    expect(() => calc.divide(5, 0)).toThrow(/Division by zero/);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(5, 0)).toThrow(/Modulo by zero/);
  });

  test('power with zero exponent returns 1', () => {
    expect(calc.power(2, 0)).toBe(1);
  });

  test('power with negative exponent returns fraction', () => {
    expect(calc.power(2, -1)).toBeCloseTo(0.5);
  });

  test('square root of negative number throws', () => {
    expect(() => calc.squareRoot(-1)).toThrow(/Square root of negative number/);
  });

  test('works with negative numbers', () => {
    expect(calc.add(-2, -3)).toBe(-5);
    expect(calc.subtract(-2, 3)).toBe(-5);
    expect(calc.multiply(-4, 2)).toBe(-8);
    expect(calc.divide(-10, 2)).toBe(-5);
  });

  test('works with floating point numbers', () => {
    expect(calc.add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(calc.divide(5.5, 2)).toBeCloseTo(2.75);
    expect(calc.squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });
});
