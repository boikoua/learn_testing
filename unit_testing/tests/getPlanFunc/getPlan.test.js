const getPlan = require('./getPlan');

// Вызываю функцию с нужными параметрами и проверяю её результат
const res = getPlan(200, 3, 50);

test('Проверка что значение есть массив', () => {
  expect(res).toBeInstanceOf(Array);
});

// toEqual
test('Массив равен ожидаемой структуре и наполнению', () => {
  expect(res).toEqual([300, 450, 675]);
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
  expect(res).toBeDefined();
});

// toContain
test('Проверка, содержит ли результат число', () => {
  expect(res).toContain(450);
});

// toHaveLength
test('Проверка длины массива', () => {
  expect(res).toHaveLength(3);
});
