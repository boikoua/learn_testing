const fetchUserName = require('./fetchUserName');

describe('Test for fetchUserName', () => {
  test('Should return a correct name', () => {
    const mockFunc = jest.fn().mockReturnValue({
      id: 2,
      name: 'John',
      age: 35,
    });

    const result = fetchUserName(2, mockFunc);

    expect(result).toBe('User name: John');
    expect(mockFunc).toHaveBeenCalledWith(2);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test(`If user not found`, () => {
    const mockFunc = jest.fn().mockReturnValue(undefined);

    expect(() => fetchUserName(99, mockFunc)).toThrow('User not found');
  });
});
