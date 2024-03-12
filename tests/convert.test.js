const convert = require("../convert");
describe("Convert dollars to rubles", () => {
  it("should convert 1 dollar to 75 rubles", () => {
    const dollars = 1;
    const expectedRubles = 75;
    const result = convert(dollars);
    expect(result).toBe(expectedRubles);
  });
});
