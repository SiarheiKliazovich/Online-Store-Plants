import { useState, useEffect } from "react";
import BannerTitle from "../BannerTitle";
import { Product as ProductInterface } from "../../interface/product";
import products from "../../data/products";

import "./product.scss";

const {
  id,
  name,
  description,
  size,
  availability,
  price,
  category,
  brand,
  images,
} = products[0];

interface Props {
  inShoppingCart: number[];
  addInShoppingCart: (id: number) => void;
}

const Product = ({ inShoppingCart, addInShoppingCart }: Props) => {
  //console.log(inShoppingCart);
  const [image, setImage] = useState(images[0]);
  const [priceProduct, setPrice] = useState(price[0]);

  const changeImage = (e: React.MouseEvent<HTMLDivElement>): void => {
    const img = e.target;
    if (img instanceof Element) {
      const newImage = img.getAttribute("src");
      if (typeof newImage === "string") {
        setImage(newImage);
      }
    }
  };

  const imgElements = images.map((item, i) => {
    return (
      <div key={i} className="product__mini-image" onClick={changeImage}>
        <img src={item} alt={name} className="product__mini-img" />
      </div>
    );
  });

  // const changePrice = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   const {
  //     target: { value: selectText },
  //   } = e;
  //   const indexOfSelectedSize = size.indexOf(selectText);
  //   setPrice(price[indexOfSelectedSize]);
  // };

  const buttonCart = () => {
    if (inShoppingCart.indexOf(id) > -1) {
      return (
        <button className="product__button" disabled>
          In Cart
        </button>
      );
    } else {
      return (
        <button className="product__button" onClick={addToCart}>
          Add To Cart
        </button>
      );
    }
  };

  const addToCart = () => {
    console.log("Добавление в корзину");
    addInShoppingCart(id);
    //console.log(inShoppingCart);
    buttonCart();
  };

  const buyNow = () => {
    if (inShoppingCart.indexOf(id) === -1) {
      console.log("Товара в корзине нет");
    } else {
      console.log("Товар в корзине есть");
    }
  };

  return (
    <>
      <BannerTitle title={`${category[0]} | ${name}`} />
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
              <span>Category:</span> {category[0]}
            </p>
            <p className="product__availability">
              <span>Availability:</span> {availability}
            </p>
          </div>
          <div className="product__price hl">
            <span>Price:</span> ${priceProduct}
          </div>
          <div className="product__options">
            <div className="product__size">
              {/* <span>Size:</span>
              <select onChange={changePrice}>
                {size.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select> */}
            </div>
          </div>
          <div className="product__order"></div>
          <div className="product__buttons hl">
            {buttonCart()}
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
