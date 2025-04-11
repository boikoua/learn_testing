const addCssClass = (element, classToAdd) => {
  if (typeof classToAdd !== 'string') {
    throw new Error('Argument is not a string');
  }

  const prepareClass = classToAdd.trim().toLowerCase();
  const classArray = [
    ...new Set(element.className.trim().replace(/ +/g, ' ').split(' ')),
  ];

  const isInclude = classArray.includes(prepareClass);

  if (!isInclude) {
    classArray.push(prepareClass);
    element.className = classArray.join(' ');
  }
};

const el = {
  className: 'joke new',
};

console.log(addCssClass(el, 'active')); // 'joke new active'
console.log(addCssClass(el, 'new')); // 'joke new active'

module.exports = addCssClass;
