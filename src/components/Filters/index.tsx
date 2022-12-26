import "./Filters.scss";
import { useEffect } from "react";
import { FiltersType } from "../../types";
import { getFilters } from "../../helpers/filter";
import { FunctionComponent } from "react";

const filter = getFilters();
console.log("filters", filter);
const Filters: FunctionComponent<FiltersType> = ({
  filters,
  setFilters,
}: FiltersType) => {
  useEffect(() => {
    // console.log(Math.min.apply(null, filter.prices));
    setFilters({
      ...filters,
      prices: [
        Math.min.apply(null, filter.prices),
        Math.max.apply(null, filter.prices),
      ],
      stocks: [
        Math.min.apply(null, filter.stocks),
        Math.max.apply(null, filter.stocks),
      ],
    });
  }, []);

  return (
    <div className="filter">
      <div className="filter__panel">
        <button className="btn__filters-reset">Reset Filters</button>
        <button className="btn__copy-link">Copy Link</button>
      </div>
      <div className="category__wrapper">
        <h3 className="title__filter">Category</h3>
        {filter.categories.map((category, index) => (
          <div className="filter__list" key={category.title + index}>
            <div className="checkbox-filter">
              <input
                value={category.title}
                className="input__category"
                type="checkbox"
                id={category.title}
                checked={filters.categories.includes(category.title)}
                onChange={(event) => {
                  if (filters.categories.includes(category.title)) {
                    setFilters({
                      ...filters,
                      categories: filters.categories.filter(
                        (el) => el !== category.title
                      ),
                    });
                  } else {
                    setFilters({
                      ...filters,
                      categories: [...filters.categories, event.target.value],
                    });
                  }
                }}
              />
              <label className="label__filter" htmlFor={category.title}>
                {category.title}
              </label>
              <span className="span__filter">
                ({category.allProductsCount}/{category.allProductsCount})
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="brand__wrapper">
        <h3 className="title__filter">Brand</h3>
        {filter.brands.map((brand, index) => (
          <div className="filter__list" key={brand.title + index}>
            <div className="checkbox-filter">
              <input
                value={brand.title}
                className="input__filter"
                type="checkbox"
                id={brand.title}
                checked={filters.brands.includes(brand.title)}
                onChange={(event) => {
                  if (filters.brands.includes(brand.title)) {
                    setFilters({
                      ...filters,
                      brands: filters.brands.filter((el) => el !== brand.title),
                    });
                  } else {
                    setFilters({
                      ...filters,
                      brands: [...filters.brands, event.target.value],
                    });
                  }
                }}
              />
              <label className="label__filter" htmlFor={brand.title}>
                {brand.title}
              </label>
              <span className="span__filter">
                ({brand.allBrandCount}/{brand.allBrandCount})
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="price__wrapper">
        <h3 className="title__filter">Price</h3>
        <div className="filter__list">
          <div className="form_control">
            <div className="form_control_container__time">
              {Math.min(...filter.prices)}
            </div>
            ⟷
            <div className="form_control_container__time">
              {Math.max(...filter.prices)}
            </div>
          </div>
          <div className="range_container">
            <div className="sliders_control">
              <input id="fromSlider" type="range" value="1" min="0" max="100" />
              <input id="toSlider" type="range" value="100" min="0" max="100" />
            </div>
            <div className="form_control">
              <div className="form_control_container">
                <div className="form_control_container__time"></div>
                <input
                  className="form_control_container__time__input"
                  type="number"
                  id="fromInput"
                  value={Math.min.apply(null, filter.prices)}
                  min="0"
                  max="100"
                />
              </div>
              <div className="form_control_container">
                <div className="form_control_container__time"></div>
                <input
                  className="form_control_container__time__input"
                  type="number"
                  id="toInput"
                  value={Math.max.apply(null, filter.prices)}
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stock__wrapper">
        <h3 className="title__filter">Stock</h3>
        <div className="filter__list">
          <div className="form_control">
            <div className="form_control_container__time">
              {Math.min(...filter.stocks)}
            </div>
            ⟷
            <div className="form_control_container__time">
              {Math.max(...filter.stocks)}
            </div>
          </div>
          <div className="range_container">
            <div className="sliders_control">
              <input id="fromSlider" type="range" value="1" min="0" max="100" />
              <input id="toSlider" type="range" value="100" min="0" max="100" />
            </div>
            <div className="form_control">
              <div className="form_control_container">
                <div className="form_control_container__time"></div>
                <input
                  className="form_control_container__time__input"
                  type="number"
                  id="fromInput"
                  value={Math.min.apply(null, filter.stocks)}
                  min="0"
                  max="100"
                />
              </div>
              <div className="form_control_container">
                <div className="form_control_container__time"></div>
                <input
                  className="form_control_container__time__input"
                  type="number"
                  id="toInput"
                  value={Math.max.apply(null, filter.stocks)}
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
