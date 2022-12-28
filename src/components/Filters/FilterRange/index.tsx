import { FunctionComponent } from "react";
import { FilterRangeType } from "../../../types";

const FilterRange: FunctionComponent<FilterRangeType> = ({
  minLabel,
  maxLabel,
  valueFromSlider,
  minFromSlider,
  maxFromSlider,
  setFiltersFromSlider,
  setFiltersToSlider,
  valueToSlider,
  minToSlider,
  maxToSlider,
}: FilterRangeType) => (
  <div className="filter__list">
    <div className="form_control">
      <div className="form_control_container__time">{minLabel}</div>⟷
      <div className="form_control_container__time">{maxLabel}</div>
    </div>
    <div className="range_container">
      <div className="sliders_control">
        <input
          id="fromSlider"
          type="range"
          value={valueFromSlider}
          min={minFromSlider}
          max={maxFromSlider}
          onChange={(event) => setFiltersFromSlider(event.target.value)}
        />
        <input
          id="toSlider"
          type="range"
          value={valueToSlider}
          min={minToSlider}
          max={maxToSlider}
          onChange={(event) => setFiltersToSlider(event.target.value)}
        />
      </div>
    </div>
  </div>
);

export default FilterRange;
