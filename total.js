function total(numbers) {
  const result = numbers
    .split(",")
    .map((part) => parseInt(part))
    .filter(checkIsInteger)
    .filter(checkIsInValidRange)
    .reduce((acc, curr) => acc + curr, 0);

  return result;
}

function checkIsInteger(integer) {
  return !isNaN(integer);
}

function checkIsInValidRange(integer) {
  return integer >= 0 && integer <= 1000;
}

module.exports = total;
