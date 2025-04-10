async function getUserById(id) {
  const mockDb = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockDb.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
}

module.exports = getUserById;
