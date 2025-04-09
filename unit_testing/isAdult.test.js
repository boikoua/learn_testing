const isAdult = require('./isAdult');

// toBeTruthy
test('Пользователь совершеннолетний', () => {
  expect(isAdult(18)).toBeTruthy();
});

// toBeFalsy
test('Пользователь не совершеннолетний', () => {
  expect(isAdult(10)).toBeFalsy();
});
