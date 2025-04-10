const addCssClass = require('./addCssClass');

test('Должно добавить указанный класс', () => {
  const el = {
    className: 'joke new',
  };

  addCssClass(el, 'active');

  expect(el.className).toBe('joke new active');
});

test('Должно не добавлять класс, если он уже есть', () => {
  const el = {
    className: 'joke new',
  };

  addCssClass(el, 'new');

  expect(el.className).toBe('joke new');
});

test('Должно убирать лишние пробелы и добавлять класс', () => {
  const el = {
    className: 'joke new',
  };

  addCssClass(el, '         active  ');

  expect(el.className).toBe('joke new active');
});

test('Должно переводить класс в нижний регистр', () => {
  const el = {
    className: 'joke new',
  };

  addCssClass(el, 'ActIvE');

  expect(el.className).toBe('joke new active');
});

test('Должен выбросить ошибку, если там не строка', () => {
  const el = {
    className: 'joke new',
  };

  expect(() => addCssClass(el, null)).toThrow('Argument is not a string');
});
