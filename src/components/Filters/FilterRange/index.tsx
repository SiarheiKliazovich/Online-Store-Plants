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
      {valueFromSlider !== 0 || valueToSlider !== 0 ? (
        <>
          <div className="form_control_container__time">{minLabel}</div>⟷
          <div className="form_control_container__time">{maxLabel}</div>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
    <div className="range_container">
      <div className="sliders_control">
        <input
          id="fromSlider"
          type="range"
          value={valueFromSlider !== 0 ? valueFromSlider : minFromSlider}
          min={minFromSlider}
          max={maxFromSlider}
          onChange={(event) =>
            setFiltersFromSlider(
              valueFromSlider !== 0
                ? event.target.value
                : minFromSlider.toString()
            )
          }
        />
        <input
          id="toSlider"
          type="range"
          value={valueToSlider !== 0 ? valueToSlider : maxToSlider}
          min={minToSlider}
          max={maxToSlider}
          onChange={(event) =>
            setFiltersToSlider(
              valueToSlider !== 0 ? event.target.value : maxToSlider.toString()
            )
          }
        />
      </div>
    </div>
  </div>
);

export default FilterRange;
