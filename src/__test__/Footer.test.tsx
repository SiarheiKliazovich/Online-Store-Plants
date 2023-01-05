import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";

it("renders footer", () => {
  const footer = render(
    <Router>
      <Footer />
    </Router>
  );
  expect(footer).toMatchSnapshot();
});
