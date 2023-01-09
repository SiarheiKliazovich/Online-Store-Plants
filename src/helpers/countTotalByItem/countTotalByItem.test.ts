import { countTotalByItem } from "./countTotalByItem";

describe("Count total sum for one item", () => {
  test("Multiply 3 * 30 to equal 90", () => {
    expect(countTotalByItem(3, 30)).toBe(90);
  });
  test("Multiply 5 * 20 to equal 100", () => {
    expect(countTotalByItem(5, 20)).toBe(100);
  });
  test("Multiply 2 * 10 not to equal string", () => {
    expect(countTotalByItem(2, 10)).not.toBe("20");
  });
});
