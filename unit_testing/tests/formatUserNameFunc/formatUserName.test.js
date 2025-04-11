const formatUserName = require('./formatUserName');

test(`Должна быть ошибка если нет firstName`, () => {
  expect(() => formatUserName('', 'johnson')).toThrow();
});

test(`Должна быть ошибка если нет lastName`, () => {
  expect(() => formatUserName('John', '')).toThrow();
});

test(`Должно вернуть правильные результат fullName`, () => {
  expect(formatUserName('John', 'Johnson')).toBe('John Johnson');
});

test(`Должно вернуть результат с первой большой буквой`, () => {
  expect(formatUserName('john', 'johnson')).toBe('John johnson');
});

test(`Должно вернуть правильный результат если есть ненужные пробелы`, () => {
  expect(formatUserName('     john', '  Johnson   ')).toBe('John Johnson');
});

test(`Должна быть ошибка, если в качестве аргумента передали число`, () => {
  expect(() => formatUserName(122, 'johnson')).toThrow();
});

test(`Должна быть ошибка, если в качестве аргумента передали null`, () => {
  expect(() => formatUserName('John', null)).toThrow();
});
