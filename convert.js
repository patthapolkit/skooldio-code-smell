function dollarsToRubles(dollars) {
  const DOLLAR_TO_RUBLE_RATE = 75; // Assuming the exchange rate is 1 USD = 75 RUB
  return dollars * DOLLAR_TO_RUBLE_RATE;
}

module.exports = dollarsToRubles;
