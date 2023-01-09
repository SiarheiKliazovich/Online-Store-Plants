import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import View from "../View";

it("renders grid view component", () => {
  const view = "grid";
  const setView = jest.fn();
  const wrapper = render(
    <Router>
      <View view={view} setView={setView} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders line view component", () => {
  const view = "line";
  const setView = jest.fn();
  const wrapper = render(
    <Router>
      <View view={view} setView={setView} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
