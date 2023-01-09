import { isInfinity } from "../isInfinity/isInfinity";

describe("isInfinity helper", () => {
  test("return false", () => {
    expect(isInfinity(3)).toBe(false);
  });
  test("return true", () => {
    expect(isInfinity(Infinity)).toBe(true);
  });
});
