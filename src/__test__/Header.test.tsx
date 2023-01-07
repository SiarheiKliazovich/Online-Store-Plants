import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "../components/Header";

it("renders header", () => {
  const sumPrices = 3000;
  const sumCount = 10;
  const header = render(
    <Router>
      <Header sumPrices={sumPrices} sumCount={sumCount} />
    </Router>
  );
  expect(header).toMatchSnapshot();
});
