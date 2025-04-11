const isAdult = require('./isAdult');

// toBeTruthy
test('Пользователь совершеннолетний', () => {
  expect(isAdult(18)).toBeTruthy();
});

// toBeFalsy
test('Пользователь не совершеннолетний', () => {
  expect(isAdult(10)).toBeFalsy();
});

// toBeGreaterThan
test('Проверяет, что значение больше тестируемого', () => {
  expect(10).toBeGreaterThan(9);
});

// toBeLessThan
test('Проверяет, что значение меньше тестируемого', () => {
  expect(10).toBeLessThan(11);
});

// not
test('Проверка обратного значения', () => {
  expect(isAdult(22)).not.toBe('true');
});
