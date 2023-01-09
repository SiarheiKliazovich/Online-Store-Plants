import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Search from "../Search";

it("Search component", () => {
  const searchQuery = "Aeonium";
  const setSearchQuery = jest.fn();
  const wrapper = render(
    <Router>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
