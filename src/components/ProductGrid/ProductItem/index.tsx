import { FunctionComponent } from "react";
import { Product } from "../../../interface/product";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

type ProductType = {
  product: Product;
};

const ProductItem: FunctionComponent<ProductType> = ({
  product,
}: ProductType) => {
  return (
    <div className="container-inner" key={product.id}>
      <div className="product-block-inner">
        <Link className="product__img_link" to={`/product/${product.id}`}>
          <img
            className="product__img"
            src={product.thumbnail}
            alt="image product"
          />
          <div className="product__text_wrapper">
            <h3 className="product__text">{product.name}</h3>
            <span className="price">
              ${product.price[0]} - ${product.price[product.price.length - 1]}
            </span>
          </div>
        </Link>
        <div className="product__quantity">
          <div className="product__input_wrapper">
            <span className="product__quantity_title">Qty: </span>
            <input className="minus" type="button" value="-" />
            <input
              className="product__quantity_input-text"
              type="number"
              step="1"
              min="1"
              max="1000"
              name="quantity"
              value="1"
              title="Qty"
              pattern="[0-9]*"
            />
            <input className="plus" type="button" value="+" />
          </div>
          <div className="product__btn_wrapper">
            <button className="product__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
