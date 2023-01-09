import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import App from ".";

it("renders app", () => {
  const app = render(
    <Router>
      <App />
    </Router>
  );
  expect(app).toMatchSnapshot();
});
