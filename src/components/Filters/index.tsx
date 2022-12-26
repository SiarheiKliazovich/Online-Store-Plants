import "./Filters.scss";
import { useEffect } from "react";
import { FiltersType } from "../../types";
import { getFilters } from "../../helpers/filter";
import { FunctionComponent } from "react";
import products from "./../../data/products";

const Filters: FunctionComponent<FiltersType> = ({
  filters,
  setFilters,
  productList,
  filterReset,
}: FiltersType) => {
  const productFilters = getFilters(products);
  const filterList = getFilters(productList);

  useEffect(() => {
    setFilters({
      ...filters,
      prices: [
        Math.min.apply(null, filterList.prices),
        Math.max.apply(null, filterList.prices),
      ],
      stocks: [
        Math.min.apply(null, filterList.stocks),
        Math.max.apply(null, filterList.stocks),
      ],
    });
  }, []);

  return (
    <div className="filter">
      <div className="filter__panel">
        <button className="btn__filters-reset" onClick={() => filterReset()}>
          Reset Filters
        </button>

        <button className="btn__copy-link">Copy Link</button>
      </div>
      <div className="category__wrapper">
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
      <div className="brand__wrapper">
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
      <div className="price__wrapper">
        <h3 className="title__filter">Price</h3>
        <div className="filter__list">
          <div className="form_control">
            <div className="form_control_container__time">
              {Math.min(...filterList.prices)}
            </div>
            ⟷
            <div className="form_control_container__time">
              {Math.max(...filterList.prices)}
            </div>
          </div>
          <div className="range_container">
            <div className="sliders_control">
              <input
                id="fromSlider"
                type="range"
                value={filters.prices[0]}
                min={Math.min.apply(null, filterList.prices)}
                max={Math.max.apply(null, filterList.prices)}
              />
              <input
                id="toSlider"
                type="range"
                value={filters.prices[1]}
                min={Math.min.apply(null, filterList.prices)}
                max={Math.max.apply(null, filterList.prices)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="stock__wrapper">
        <h3 className="title__filter">Stock</h3>
        <div className="filter__list">
          <div className="form_control">
            <div className="form_control_container__time">
              {Math.min(...filterList.stocks)}
            </div>
            ⟷
            <div className="form_control_container__time">
              {Math.max(...filterList.stocks)}
            </div>
          </div>
          <div className="range_container">
            <div className="sliders_control">
              <input
                id="fromSlider"
                type="range"
                value={filters.stocks[0]}
                min={Math.min.apply(null, filterList.stocks)}
                max={Math.max.apply(null, filterList.stocks)}
              />
              <input
                id="toSlider"
                type="range"
                value={filters.stocks[1]}
                min={Math.min.apply(null, filterList.stocks)}
                max={Math.max.apply(null, filterList.stocks)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
