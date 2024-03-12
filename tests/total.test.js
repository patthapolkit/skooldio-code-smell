const total = require("../total");
/* test('total of empty string should be 0', () => {
    expect(total('')).toBe(0);
}) */
describe("Total Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
  it("should test that empty string === 0", () => {
    expect(total("")).toBe(0);
  });
  it("should test that 1,2 === 3", () => {
    expect(total("1,2")).toBe(3);
  });
  it("should test that 1,1001 === 1", () => {
    expect(total("1,1001")).toBe(1);
  });
});
