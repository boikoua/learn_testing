const { slice } = require('./slice');

describe('All tests for slice function', () => {
  it(`cuts from 'begin' to 'end'`, () => {
    const result = slice('0123456789', 3, 8);

    expect(result).toBe('34567');
  });

  it(`cuts from 'begin' without 'end'`, () => {
    const result = slice('0123456789', 3);

    expect(result).toBe('3456789');
  });

  it(`cuts without 'begin' and 'end'`, () => {
    const result = slice('0123456789');

    expect(result).toBe('0123456789');
  });

  it(`'begin' === 'end'`, () => {
    const result = slice('0123456789', 5, 5);

    expect(result).toBe('');
  });

  it(`'begin' < 0 but 'end' > 0`, () => {
    const result = slice('0123456789', -4, 9);

    expect(result).toBe('678');
  });

  it(`'begin' > 0 but 'end' < 0`, () => {
    const result = slice('0123456789', 4, -3);

    expect(result).toBe('456');
  });

  it(`'begin' < 0 and 'end' < 0`, () => {
    const result = slice('0123456789', -6, -3);

    expect(result).toBe('456');
  });

  it(`'begin' < 0 without 'end'`, () => {
    const result = slice('0123456789', -4);

    expect(result).toBe('6789');
  });

  it(`'begin' > input.length`, () => {
    const result = slice('0123456789', 15);

    expect(result).toBe('');
  });

  it(`'end' > input.length`, () => {
    const result = slice('0123456789', 2, 15);

    expect(result).toBe('23456789');
  });

  it(`'begin' > 'end'`, () => {
    const result = slice('0123456789', 4, 2);

    expect(result).toBe('');
  });

  it(`'begin' is too small`, () => {
    const result = slice('0123456789', -25);

    expect(result).toBe('0123456789');
  });

  it(`'end' is too small`, () => {
    const result = slice('0123456789', 0, -20);

    expect(result).toBe('');
  });
});
