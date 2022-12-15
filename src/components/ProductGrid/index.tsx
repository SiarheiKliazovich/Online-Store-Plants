import BannerTitle from "../BannerTitle";
import products from "../../data/products";
import "./ProductGrid.css";

const ProductGrid = () => {
  const prodItems = products.map((elem) => elem);
  console.log(prodItems);

  return (
    <>
      <div className="main">
        <BannerTitle />
        <div className="main__wrapper">
          <div className="container">
            <div className="list_wrapper">
              <ul className="prodlist">
                <li className="prodlist_item">{}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
