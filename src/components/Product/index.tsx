import { useState, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import BannerTitle from "../BannerTitle";
import { IProduct } from "../../interfaces/product";
import products from "../../data/products";
import { ButtonCart } from "./ButtonCart";

import "./product.scss";

interface IProps {
  inShoppingCart: number[];
  addInShoppingCart: (id: number) => void;
}

const Product: FunctionComponent<IProps> = ({
  inShoppingCart,
  addInShoppingCart,
}) => {
  console.log(inShoppingCart);
  const { productId } = useParams();
  const product = products.find(
    (product: IProduct) => product.id.toString() === productId
  ) as IProduct;
  const {
    id,
    images,
    price,
    size,
    name,
    description,
    category,
    brand,
    availability,
  } = product as IProduct;
  const [image, setImage] = useState(images[0]);

  const changeImage = (e: React.MouseEvent<HTMLDivElement>): void => {
    const img = e.target;
    if (img instanceof Element) {
      const newImage = img.getAttribute("src");
      if (typeof newImage === "string") {
        setImage(newImage);
      }
    }
  };

  const imgElements = images.map((item: string, i: number) => {
    return (
      <div key={i} className="product__mini-image" onClick={changeImage}>
        <img src={item} alt={name} className="product__mini-img" />
      </div>
    );
  });

  const buyNow = (): void => {
    if (inShoppingCart.indexOf(id) === -1) {
      console.log("Товара в корзине нет");
    } else {
      console.log("Товар в корзине есть");
    }
  };

  return (
    <>
      <BannerTitle title={`${category} | ${name}`} />
      <div className="product__wrapper container">
        <div className="product__images">
          <div className="product__main-image">
            <img className="product__main-img" src={image} alt={name} />
          </div>
          <div className="product__mini-images">{imgElements}</div>
        </div>
        <div className="product__description">
          <h2 className="product__title hl">{name}</h2>
          <div className="product__text hl">
            <p className="product__brand">
              <span>Brand:</span> {brand}
            </p>
            <p className="product__category">
              <span>Category:</span> {category}
            </p>
            <p className="product__availability">
              <span>Availability:</span> {availability}
            </p>
            <p className="product__availability">
              <span>Size:</span> {size}
            </p>
          </div>
          <div className="product__price hl">
            <span>Price:</span> ${price}
          </div>
          <div className="product__options">
            <div className="product__size"></div>
          </div>
          <div className="product__order"></div>
          <div className="product__buttons hl">
            <ButtonCart
              cart={inShoppingCart}
              id={id}
              addInShoppingCart={addInShoppingCart}
            />
            <button className="product__button" onClick={buyNow}>
              Buy Now
            </button>
          </div>
          <div className="product__desc">
            <span>Description: </span>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
