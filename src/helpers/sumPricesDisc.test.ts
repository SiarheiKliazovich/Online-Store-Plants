import { sumPricesDisc } from "./sumPricesDisc";

const objWithOneParam = { id: "rs", name: "Rolling Scopes School", disc: 10 };

describe("Sum prices with discount", () => {
  test("1 input parameter, sum 1000 to equal sum with discount 900", () => {
    expect(sumPricesDisc([objWithOneParam], 1000)).toBe("900.0");
  });
  test("2 input parameters, sum 1000 to equal sum with discount 800", () => {
    expect(sumPricesDisc([objWithOneParam, objWithOneParam], 1000)).toBe(
      "800.0"
    );
  });
});
