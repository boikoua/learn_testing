const getPlan = require('./getPlan');

test('Проверка что значение есть массив', () => {
  expect(getPlan()).toBeInstanceOf(Array);
});

// toEqual
test('Массив равен ожидаемой структуре и наполнению', () => {
  expect(getPlan()).toEqual([1, 2, 3]);
});

// toBeNull
test('Проверка на null', () => {
  expect(null).toBeNull();
});

// toBeUndefined
test('Проверка на undefined', () => {
  expect(undefined).toBeUndefined();
});

// toBeDefined
test('Проверка что значение не undefined', () => {
  expect(getPlan()).toBeDefined();
});
