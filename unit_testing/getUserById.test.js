const getUserById = require('./getUserById');

// Первая вариация
test('Должен вернуть нужного юзера, если такой id есть', async () => {
  const res = await getUserById(1);

  expect(res).toEqual({ id: 1, name: 'John' });
});

// Вторая вариация
test('Должен вернуть нужного юзера, если такой id есть', async () => {
  await expect(getUserById(1)).resolves.toEqual({ id: 1, name: 'John' });
});

test('Должна быть ошибка, если юзера нет', () => {
  expect(getUserById(5)).rejects.toThrow();
});

test('Если аргумент не передали в функцию', () => {
  expect(getUserById()).rejects.toThrow();
});

test('Если передали null', () => {
  expect(getUserById(null)).rejects.toThrow();
});

test('Если аргументом передали строку', () => {
  expect(getUserById('hello')).rejects.toThrow();
});
