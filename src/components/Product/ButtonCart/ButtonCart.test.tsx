import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { ButtonCart } from ".";

it("renders buttons", () => {
  const shoppingCart = [{ id: 1, count: 1 }];
  const id = 1;
  const addToShoppingCart = jest.fn();
  const buttonCart = render(
    <Router>
      <ButtonCart
        shoppingCart={shoppingCart}
        id={id}
        addToShoppingCart={addToShoppingCart}
      />
    </Router>
  );
  expect(buttonCart).toMatchSnapshot();
});
