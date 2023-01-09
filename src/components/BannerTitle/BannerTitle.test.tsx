import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import BannerTitle from "../BannerTitle";

it("renders bannertitle component", () => {
  const title = "Products";
  const wrapper = render(
    <Router>
      <BannerTitle title={title} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
