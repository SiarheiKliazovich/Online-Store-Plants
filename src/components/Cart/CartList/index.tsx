import { FunctionComponent, useState, useEffect } from "react";

import products from "../../../data/products";
import CartListItem from "../CartListItem";

import "./cartList.scss";

const cart = localStorage.getItem("cart");
let parseCart;
if (typeof cart === "string") {
  parseCart = JSON.parse(cart);
}
console.log(Array.from(Object.entries(parseCart)));
const arrayFromCart = Array.from(Object.entries(parseCart));

const CartList = () => {
  const [selectValue, setSelectValue] = useState(3);

  const items = arrayFromCart.map((item, i) => {
    const id = +item[0];
    return <CartListItem key={id} {...products[id]} i={i} />;
  });

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectValue(+e.target.value);
  };

  return (
    <div className="cart__content">
      <div className="cart__pag">
        <div className="pag___items">
          <label className="pag__label">
            Items:
            <select
              className="pag__select"
              value={selectValue}
              onChange={handleChangeSelect}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </div>
      </div>
      <div className="cart__header">
        <div className="header__name">Product</div>
        <div className="header__price">Price</div>
        <div className="header__quantity">Quantity</div>
        <div className="header__total">Total</div>
      </div>
      <div className="cart__items">{items}</div>
    </div>
  );
};

export default CartList;
