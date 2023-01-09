import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Sorting from "../Sorting";

it("renders sorting component", () => {
  const sorting = "Aeonium";
  const setSorting = jest.fn();
  const wrapper = render(
    <Router>
      <Sorting sorting={sorting} setSorting={setSorting} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
