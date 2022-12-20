import { FunctionComponent } from "react";
import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

type ProductType = {
  product: IProduct;
};

const ProductItem: FunctionComponent<ProductType> = ({
  product,
}: ProductType) => (
  <div className="container-inner">
    <div className="product-block-inner">
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

          <span className="product__price_card">Price: ${product.price}</span>
        </div>

        <div className="product__quantity">
          {/* ******* пока пусть лежит может используем в карточке 1го продукта********* */}
          {/* <div className="product__input_wrapper">
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
            </div>  */}
          <div className="product__btn_wrapper">
            <button className="product__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductItem;
