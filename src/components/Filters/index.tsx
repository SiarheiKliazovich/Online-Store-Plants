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
  const Category = newCateg.filter((element, index) => {
    return newCateg.indexOf(element) === index;
  });
  const Brand = newBrand.filter((element, index) => {
    return newBrand.indexOf(element) === index;
  });
  const Price = newPrice.filter((element, index) => {
    return newPrice.indexOf(element) === index;
  });
  const Stock = newStock.filter((element, index) => {
    return newStock.indexOf(element) === index;
  });
  /*
  {category:{list:[],all:0, filtered:0}, brand:[], price:[],stock:[]}
  */
  return {
    Category,
    Brand,
    Price,
    Stock,
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
        {filterItem().Category.map((category) => (
          <div className="filter__list">
            <div className="checkbox-filter">
              <input
                value={category}
                className="input__category"
                type="checkbox"
              />
              <label className="label__category" htmlFor="">
                {category}
              </label>
              <span className="span__category">(?/?)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="brand__wrapper">
        <h3 className="title__filter">Brand</h3>
        {filterItem().Brand.map((brand) => (
          <div className="filter__list">
            <div className="checkbox-filter">
              <input className="input__filter" type="checkbox" />
              <label className="label__filter" htmlFor="London-Plants&Co">
                {brand}
              </label>
              <span className="span__filter">(?/?)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="price__wrapper">
        <h3 className="title__filter">Price</h3>
        <div className="filter__list"></div>
      </div>
      <div className="stock__wrapper">
        <h3 className="title__filter">Stock</h3>
        <div className="filter__list"></div>
      </div>
    </div>
  );
};
export default Filter;
