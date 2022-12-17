import BannerTitle from "../BannerTitle";
import Filter from "../Filters";
import ProductGrid from "../ProductGrid";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <main className="main">
        <BannerTitle title="Product" />
        <div className="container">
          <div className="main__wrapper">
            <div className="main__filter">
              <Filter />
            </div>
            <div className="main__product">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
