import { productsInCart } from "../productsInCart/productsInCart";

describe("productsInCart helper", () => {
  test("return empty array when the product is not in the cart ", () => {
    expect(productsInCart(3, [{ id: 4, count: 4 }])).toStrictEqual([]);
  });
  test("return array when the product is in the cart ", () => {
    expect(productsInCart(4, [{ id: 4, count: 2 }])).toStrictEqual([
      { id: 4, count: 2 },
    ]);
  });
});
