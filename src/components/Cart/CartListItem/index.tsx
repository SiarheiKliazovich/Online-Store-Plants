import { FunctionComponent, useState, useEffect } from "react";

import { IProduct } from "../../../interfaces/product";
import { countTotalByItem } from "../../../helpers/countTotalByItem";
import { ICartListItem } from "../../../interfaces/cartListItem";

import "./cartListItem.scss";

const CartListItem: FunctionComponent<ICartListItem> = ({
  i,
  id,
  name,
  thumbnail,
  category,
  stock,
  price,
  count,
  updateCart,
  deleteFromCart,
}) => {
  const [counter, setCounter] = useState(count);
  const [total, setTotal] = useState(price);

  const incCounter = () => {
    if (counter < stock) {
      setCounter((counter) => counter + 1);
    }
  };

  const decCounter = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  useEffect(() => {
    setTotal(countTotalByItem(counter, price));
    updateCart(id, counter);
    if (counter === 0) {
      deleteFromCart(id);
    }
  }, [counter]);

  return (
    <li className="cart__item">
      <div className="cart__item-number">{id}</div>
      <img src={thumbnail} alt={name} className="product__mini-img" />
      <div className="cart__item-text">
        <div className="cart__item-name">{name}</div>
        <div className="cart__item-category">{category}</div>
        <div className="cart__item-stock">In stock: {stock}</div>
      </div>
      <div className="cart__price">{price} $</div>
      <div className="cart__counter">
        <button onClick={decCounter} className="mini-button">
          -
        </button>
        <div className="counter">{counter}</div>
        <button onClick={incCounter} className="mini-button">
          +
        </button>
      </div>
      <div className="cart__total">{total} $</div>
    </li>
  );
};

export default CartListItem;
