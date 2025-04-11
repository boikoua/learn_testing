const getAdults = require('./getAdults');

describe('Tests for getAdults func', () => {
  it(`If 'users' isn't array`, () => {
    expect(() => getAdults({ name: 'John', age: 25 })).toThrow(
      'Input must be an array'
    );
  });

  it(`If 'users' is empty`, () => {
    expect(getAdults([])).toEqual([]);
  });

  it(`If 'users' is normal`, () => {
    const users = [
      { name: 'John', age: 25 },
      { name: 'Alice', age: 17 },
      { name: 'Bob', age: 18 },
    ];

    expect(getAdults(users)).toEqual([
      { name: 'John', age: 25 },
      { name: 'Bob', age: 18 },
    ]);
  });

  it(`If some user had age as not number type`, () => {
    const users = [
      { name: 'John', age: 25 },
      { name: 'Alice', age: '17' },
      { name: 'Bob', age: 18 },
    ];

    expect(() => getAdults(users)).toThrow('User must have a numeric age');
  });

  it(`'array' must had length === 2`, () => {
    const users = [
      { name: 'John', age: 25 },
      { name: 'Alice', age: 17 },
      { name: 'Bob', age: 18 },
    ];

    expect(getAdults(users)).toHaveLength(2);
  });

  it(`If 'user' is not 'object'`, () => {
    const users = ['John', 25];

    expect(() => getAdults(users)).toThrow('User must be a non-null object');
  });

  it(`If 'user' is null'`, () => {
    const users = [{ name: 'John', age: 25 }, null];

    expect(() => getAdults(users)).toThrow('User must be a non-null object');
  });
});
