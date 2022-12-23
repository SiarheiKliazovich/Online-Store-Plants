import "./Filters.scss";
import products from "../../data/products";

const filterItem = () => {
  const newBrand: string[] = [];
  const newPrice: number[] = [];
  const newCateg: string[] = [];
  const newStock: number[] = [];
  products.map((product) => newCateg.push(product.category));
  products.map((product) => newBrand.push(product.brand));
  products.map((product) => newPrice.push(product.price));
  products.map((product) => newStock.push(product.stock));
  const category = newCateg.filter((element, index) => {
    return newCateg.indexOf(element) === index;
  });
  const brand = newBrand.filter((element, index) => {
    return newBrand.indexOf(element) === index;
  });
  const price = newPrice.filter((element, index) => {
    return newPrice.indexOf(element) === index;
  });
  const stock = newStock.filter((element, index) => {
    return newStock.indexOf(element) === index;
  });
  /*
  {category:{list:[],all:0, filtered:0}, brand:[], price:[],stock:[]}
  */
  return {
    category,
    brand,
    price,
    stock,
  };
};

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__panel">
        <button className="btn__filters-reset">Reset Filters</button>
        <button className="btn__copy-link">Copy Link</button>
      </div>
      <div className="category__wrapper">
        <h3 className="title__filter">Category</h3>
        {filterItem().category.map((category) => (
          <div className="filter__list">
            <div className="checkbox-filter">
              <input
                value={category}
                className="input__category"
                type="checkbox"
              />
              <label className="label__filter" htmlFor="">
                {category}
              </label>
              <span className="span__filter">(?/?)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="brand__wrapper">
        <h3 className="title__filter">Brand</h3>
        {filterItem().brand.map((brand) => (
          <div className="filter__list">
            <div className="checkbox-filter">
              <input className="input__filter" type="checkbox" />
              <label className="label__filter" htmlFor="">
                {brand}
              </label>
              <span className="span__filter">(?/?)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="price__wrapper">
        <h3 className="title__filter">Price</h3>
        {/* {filterItem().price.map((price) => ( */}
        <div className="filter__list">
          <div className="range_container">
            <div className="form_control">
              <div className="form_control_container__time">Min price</div>⟷
              <div className="form_control_container__time">Max price</div>
            </div>
            <div className="sliders_control">
              <input
                id="fromSlider"
                type="range"
                // value={price}
                min="0"
                max="100"
              />
              <input
                id="toSlider"
                type="range"
                // value={price}
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
      <div className="stock__wrapper">
        <h3 className="title__filter">Stock</h3>
        <div className="filter__list">
          <div className="range_container">
            <div className="form_control">
              <div className="form_control_container__time">min stock</div>⟷
              <div className="form_control_container__time">max stock</div>
            </div>
            <div className="sliders_control">
              <input id="fromSlider" type="range" value="" min="0" max="100" />
              <input id="toSlider" type="range" value="" min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
