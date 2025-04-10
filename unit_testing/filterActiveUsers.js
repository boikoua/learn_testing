function filterActiveUsers(users) {
  // Проверка массив или нет
  if (!Array.isArray(users)) {
    throw new Error('Input must be an array');
  }

  // вернёт массив только тех, у кого Active === true
  return users.filter((user) => user && user.active === true);
}

module.exports = filterActiveUsers;
