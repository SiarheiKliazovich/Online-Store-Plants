import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import CartList from "../components/Cart/CartList";

it("renders cart list", () => {
  const shoppingCart = [{ id: 1, count: 1 }];
  const updateCart = jest.fn();
  const deleteFromCart = jest.fn();
  const sumPrices = 3000;
  const sumCount = 10;
  const setShowModal = jest.fn();
  const cartList = render(
    <Router>
      <CartList
        shoppingCart={shoppingCart}
        updateCart={updateCart}
        deleteFromCart={deleteFromCart}
        sumPrices={sumPrices}
        sumCount={sumCount}
        setShowModal={setShowModal}
      />
    </Router>
  );
  expect(cartList).toMatchSnapshot();
});
