import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import FilterRange from "../FilterRange";

it("renders filterRange component when valueFromSlider not equal to 0 ", () => {
  const minLabel = 1;
  const maxLabel = 2;
  const valueFromSlider = 3;
  const minFromSlider = 4;
  const maxFromSlider = 5;
  const setFiltersFromSlider = jest.fn();
  const setFiltersToSlider = jest.fn();
  const valueToSlider = 6;
  const minToSlider = 7;
  const maxToSlider = 8;
  const wrapper = render(
    <Router>
      <FilterRange
        minLabel={minLabel}
        maxLabel={maxLabel}
        valueFromSlider={valueFromSlider}
        minFromSlider={minFromSlider}
        maxFromSlider={maxFromSlider}
        setFiltersFromSlider={setFiltersFromSlider}
        setFiltersToSlider={setFiltersToSlider}
        valueToSlider={valueToSlider}
        minToSlider={minToSlider}
        maxToSlider={maxToSlider}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders filterRange component when valueFromSlider is 0 ", () => {
  const minLabel = 1;
  const maxLabel = 2;
  const valueFromSlider = 0;
  const minFromSlider = 4;
  const maxFromSlider = 5;
  const setFiltersFromSlider = jest.fn();
  const setFiltersToSlider = jest.fn();
  const valueToSlider = 6;
  const minToSlider = 7;
  const maxToSlider = 8;
  const wrapper = render(
    <Router>
      <FilterRange
        minLabel={minLabel}
        maxLabel={maxLabel}
        valueFromSlider={valueFromSlider}
        minFromSlider={minFromSlider}
        maxFromSlider={maxFromSlider}
        setFiltersFromSlider={setFiltersFromSlider}
        setFiltersToSlider={setFiltersToSlider}
        valueToSlider={valueToSlider}
        minToSlider={minToSlider}
        maxToSlider={maxToSlider}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders filterRange component valueToSlider not equal to 0 ", () => {
  const minLabel = 1;
  const maxLabel = 2;
  const valueFromSlider = 3;
  const minFromSlider = 4;
  const maxFromSlider = 5;
  const setFiltersFromSlider = jest.fn();
  const setFiltersToSlider = jest.fn();
  const valueToSlider = 6;
  const minToSlider = 7;
  const maxToSlider = 8;
  const wrapper = render(
    <Router>
      <FilterRange
        minLabel={minLabel}
        maxLabel={maxLabel}
        valueFromSlider={valueFromSlider}
        minFromSlider={minFromSlider}
        maxFromSlider={maxFromSlider}
        setFiltersFromSlider={setFiltersFromSlider}
        setFiltersToSlider={setFiltersToSlider}
        valueToSlider={valueToSlider}
        minToSlider={minToSlider}
        maxToSlider={maxToSlider}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders filterRange component valueToSlider is 0 ", () => {
  const minLabel = 1;
  const maxLabel = 2;
  const valueFromSlider = 3;
  const minFromSlider = 4;
  const maxFromSlider = 5;
  const setFiltersFromSlider = jest.fn();
  const setFiltersToSlider = jest.fn();
  const valueToSlider = 0;
  const minToSlider = 7;
  const maxToSlider = 8;
  const wrapper = render(
    <Router>
      <FilterRange
        minLabel={minLabel}
        maxLabel={maxLabel}
        valueFromSlider={valueFromSlider}
        minFromSlider={minFromSlider}
        maxFromSlider={maxFromSlider}
        setFiltersFromSlider={setFiltersFromSlider}
        setFiltersToSlider={setFiltersToSlider}
        valueToSlider={valueToSlider}
        minToSlider={minToSlider}
        maxToSlider={maxToSlider}
      />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
