import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Filters from "../Filters";

it("Filters component", () => {
  const filters = {
    categories: ["Aeonium"],
    brands: ["London-Plants&Co"],
    prices: [22, 30],
    stocks: [45, 68],
  };
  const setFilters = jest.fn();
  const productList = [
    {
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
    },
  ];
  const filterReset = jest.fn();
  const productFilters = {
    categories: [{ title: "Aeonium", filtered: 2, allProductsCount: 4 }],
    brands: [{ title: "London-Plants&Co", filtered: 3, allBrandCount: 4 }],
    prices: [22, 30],
    stocks: [45, 50],
  };
  const wrapper = render(
    <Router>
      <Filters
        filters={filters}
        setFilters={setFilters}
        productList={productList}
        filterReset={filterReset}
        productFilters={productFilters}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
