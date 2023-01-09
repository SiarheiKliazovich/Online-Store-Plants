import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Products from "../Products";

it("Products component ", () => {
  const shoppingCart = [{ id: 1, count: 1 }];
  const addToShoppingCart = jest.fn();
  const wrapper = render(
    <Router>
      <Products
        shoppingCart={shoppingCart}
        addToShoppingCart={addToShoppingCart}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
