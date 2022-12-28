import "./Filters.scss";
import { FiltersType } from "../../types";
import { FunctionComponent } from "react";
import { useState } from "react";
import FilterRange from "../Filters/FilterRange";

const Filters: FunctionComponent<FiltersType> = ({
  filters,
  setFilters,
  productList,
  filterReset,
  productFilters,
}: FiltersType) => {
  const [copied, setCopied] = useState(false);
  const copy = (): void => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(setCopied, 1500);
  };

  const setFilterMaxPrices = (value: string): void =>
    setFilters({
      ...filters,
      prices: [filters.prices[0], parseInt(value, 10)],
    });

  const setFilterMinPrices = (value: string): void =>
    setFilters({
      ...filters,
      prices: [parseInt(value, 10), filters.prices[1]],
    });

  const setFilterMaxStocks = (value: string): void =>
    setFilters({
      ...filters,
      stocks: [filters.stocks[0], parseInt(value, 10)],
    });

  const setFilterMinStocks = (value: string): void =>
    setFilters({
      ...filters,
      stocks: [parseInt(value, 10), filters.stocks[1]],
    });

  return (
    <div className="filter">
      <div className="filter__btn_wrapper">
        <button className="btn__filters-reset" onClick={() => filterReset()}>
          Reset Filters
        </button>
        <button className="btn__copy-link" onClick={copy}>
          {!copied ? "Copy link" : "Copied!"}
        </button>
      </div>
      <div className="filter__panel">
        <h3 className="title__filter">Category</h3>
        {productFilters.categories.map((category, index) => (
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
                (
                {
                  productList.filter(
                    (product) => product.category === category.title
                  ).length
                }
                /{category.allProductsCount})
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="filter__panel">
        <h3 className="title__filter">Brand</h3>
        {productFilters.brands.map((brand, index) => (
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
                      brands: filters.brands.filter(
                        (brandItem) => brandItem !== brand.title
                      ),
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
                (
                {
                  productList.filter((product) => product.brand === brand.title)
                    .length
                }
                /{brand.allBrandCount})
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="filter__panel">
        <h3 className="title__filter">Price</h3>
        <FilterRange
          minLabel={filters.prices[0]}
          maxLabel={filters.prices[1]}
          valueFromSlider={filters.prices[0]}
          minFromSlider={productFilters.prices[0]}
          maxFromSlider={filters.prices[1]}
          setFiltersFromSlider={setFilterMinPrices}
          setFiltersToSlider={setFilterMaxPrices}
          valueToSlider={filters.prices[1]}
          minToSlider={filters.prices[0]}
          maxToSlider={productFilters.prices[1]}
        />
      </div>
      <div className="filter__panel">
        <h3 className="title__filter">Stock</h3>
        <FilterRange
          minLabel={filters.stocks[0]}
          maxLabel={filters.stocks[1]}
          valueFromSlider={filters.stocks[0]}
          minFromSlider={productFilters.stocks[0]}
          maxFromSlider={filters.stocks[1]}
          setFiltersFromSlider={setFilterMinStocks}
          setFiltersToSlider={setFilterMaxStocks}
          valueToSlider={filters.stocks[1]}
          minToSlider={filters.stocks[0]}
          maxToSlider={productFilters.stocks[1]}
        />
      </div>
    </div>
  );
};
export default Filters;
