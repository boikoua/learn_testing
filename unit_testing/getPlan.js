function getPlan(startProduction, numberOfMonths, percent) {
  const result = [];

  let production = startProduction;

  for (let i = 0; i < numberOfMonths; i++) {
    production = production * (1 + percent / 100);

    result.push(production);
  }

  return result;
}

module.exports = getPlan;
