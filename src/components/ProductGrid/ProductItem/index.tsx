import { FunctionComponent } from "react";
import { ProductType } from "../../../types";
import { Link } from "react-router-dom";
import "./ProductItem.scss";
import classNames from "classnames";
import { productsInCart } from "../../../helpers/productsInCart/productsInCart";

const ProductItem: FunctionComponent<ProductType> = ({
  product,
  shoppingCart,
  addToShoppingCart,
}: ProductType) => (
  <div className="container-inner">
    <div
      className={classNames("product-block-inner", {
        "product-active": productsInCart(product.id, shoppingCart).length !== 0,
      })}
    >
      <div className="img-prod_wrapper">
        <Link className="product__img_link" to={`/product/${product.id}`}>
          <img
            className="product__img"
            src={product.thumbnail}
            alt="image product"
          />
        </Link>
      </div>
      <div className="product__info_wrapper">
        <Link className="product__img_link" to={`/product/${product.id}`}>
          <div className="product__text_wrapper">
            <h3 className="product__text-name">{product.name}</h3>
            <h4 className="product__description_card">
              {product.description[0]}
            </h4>
            <h4 className="product__brand_card">Brand: {product.brand}</h4>
            <h4 className="product__category_card">
              Category: {product.category}
            </h4>
            <h4 className="product__rating_card">Rating: {product.rating}</h4>
            <h4 className="product__stock_card">In Stock: {product.stock}</h4>
            <h4 className="product__price_card">Price: ${product.price}</h4>
          </div>
        </Link>
        <div className="product__quantity">
          <div className="product__btn_wrapper">
            <button
              className="product__btn"
              onClick={() => addToShoppingCart(product.id)}
            >
              {productsInCart(product.id, shoppingCart).length === 0
                ? "Add to cart"
                : "Drop from cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProductItem;
