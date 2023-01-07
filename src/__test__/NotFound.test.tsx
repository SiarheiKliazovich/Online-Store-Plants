import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import NotFound from "../components/NotFound";

it("renders not found page", () => {
  const notFound = render(
    <Router>
      <NotFound />
    </Router>
  );
  expect(notFound).toMatchSnapshot();
});
