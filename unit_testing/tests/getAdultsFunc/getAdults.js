/**
 *
 * @param {Array} users
 * @returns {Array}
 */

function getAdults(users) {
  if (!Array.isArray(users)) {
    throw new Error('Input must be an array');
  }

  return users.filter((user) => {
    if (typeof user !== 'object' || user === null) {
      throw new Error('User must be a non-null object');
    }

    if (typeof user.age !== 'number') {
      throw new Error('User must have a numeric age');
    }

    return user.age >= 18;
  });
}

module.exports = getAdults;
