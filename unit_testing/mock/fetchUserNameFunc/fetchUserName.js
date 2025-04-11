const users = [
  {
    id: 1,
    name: 'Alice',
    age: 30,
  },
  {
    id: 2,
    name: 'John',
    age: 35,
  },
  {
    id: 3,
    name: 'Alex',
    age: 25,
  },
  {
    id: 4,
    name: 'Nina',
    age: 37,
  },
  {
    id: 5,
    name: 'Dave',
    age: 27,
  },
];

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function fetchUserName(id, getUserById) {
  const user = getUserById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return `User name: ${user.name}`;
}

module.exports = fetchUserName;
