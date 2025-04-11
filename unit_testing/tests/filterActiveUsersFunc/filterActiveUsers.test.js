const filterActiveUsers = require('./filterActiveUsers');

test('Должна быть ошибка, если передан не массив', () => {
  expect(() => filterActiveUsers(123)).toThrow();
});

test('Должен вернуть правильный массив', () => {
  const users = [
    { name: 'John', age: 30, active: true },
    { name: 'Don', age: 38, active: false },
    { name: 'Gilbert', age: 35, active: false },
    { name: 'Malcolm', age: 50, active: true },
  ];

  expect(filterActiveUsers(users)).toEqual([
    { name: 'John', age: 30, active: true },
    { name: 'Malcolm', age: 50, active: true },
  ]);
});

test('Проверка, если аргументом указали пустой массив', () => {
  expect(filterActiveUsers([])).toEqual([]);
});

test('Проверка на то, если будут "грязные" данные', () => {
  const users = [
    { name: 'John', age: 30, active: true },
    null,
    undefined,
    { name: 'Don', age: 38 },
    { name: 'Gilbert', age: 35, active: false },
  ];

  expect(filterActiveUsers(users)).toEqual([
    { name: 'John', age: 30, active: true },
  ]);
});
