const sum = require('./sum');

test('The test is success', () => {
  expect(sum(3, 5)).toBe(8);
});

test('Этот тест не сработает', () => {
  expect(sum(1, -3)).toBe(-2);
});
