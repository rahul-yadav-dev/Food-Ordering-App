const { Sum } = require("../sum");

test("Sum function should calculate the sum of two numbers", () => {
  const result = Sum(1, 3);

  // Assertion
  expect(result).toBe(4);
});
