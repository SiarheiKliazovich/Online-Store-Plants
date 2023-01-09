import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ProductItem from "../ProductItem";

it("ProductItem component", () => {
  const product = {
    id: 1,
    name: "Biotech",
    title: "The growth of a plant involves several stages.",
    description: ["Fast, a plot of land is selected."],
    size: "XL",
    color: "Pink",
    availability: "In Stock",
    price: 25,
    category: "Aeonium",
    stock: 3,
    rating: 4,
    brand: "London-Plants&Co",
    thumbnail:
      "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
    images: [
      "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
    ],
  };
  const shoppingCart = [{ id: 1, count: 1 }];
  const addToShoppingCart = jest.fn();
  const wrapper = render(
    <Router>
      <ProductItem
        product={product}
        shoppingCart={shoppingCart}
        addToShoppingCart={addToShoppingCart}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
