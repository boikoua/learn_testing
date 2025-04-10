function formatUserName(firstName, lastName) {
  // Функция проверяет есть ли вообще имя
  if (!firstName || !lastName) {
    throw new Error('Both firstName and lastName are required');
  }

  // Складывает оба значения в одно
  const fullName = `${firstName.trim()} ${lastName.trim()}`;
  // Делает первую букву всегда заглавной
  return fullName.charAt(0).toUpperCase() + fullName.slice(1);
}

module.exports = formatUserName;
