import { FunctionComponent, useState } from "react";

import products from "../../../data/products";
import CartListItem from "../CartListItem";
import { getUpdateStotage } from "../../../helpers/getUpdateStorage";

import "./cartList.scss";

const CartList = () => {
  let parseCart = getUpdateStotage();
  const [cartData, setCartData] = useState(parseCart);
  const [selectValue, setSelectValue] = useState(3);

  const updateCart = (id: number, counter: number): void => {
    parseCart = getUpdateStotage();
    const newArrayItems = parseCart.map((item) => {
      if (item.id === id) {
        return { ...item, count: counter };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(newArrayItems));
  };

  const deleteItem = (id: number): void => {
    parseCart = getUpdateStotage();
    const newArrayItems = parseCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newArrayItems));
    setCartData(newArrayItems);
  };

  const items = parseCart.map((item, i) => {
    const id = item.id;
    return (
      <CartListItem
        key={id}
        {...products[id - 1]}
        i={i}
        deleteItem={deleteItem}
        updateCart={updateCart}
      />
    );
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
