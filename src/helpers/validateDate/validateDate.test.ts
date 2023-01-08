import { validateDate } from "./validateDate";

describe("Validate date", () => {
  test("Incorrect date", () => {
    expect(validateDate("17")).toBeFalsy();
  });
  test("Correct date", () => {
    expect(validateDate("5")).toBeTruthy();
  });
  test("Correct date", () => {
    expect(validateDate("12")).toBeTruthy();
  });
});
