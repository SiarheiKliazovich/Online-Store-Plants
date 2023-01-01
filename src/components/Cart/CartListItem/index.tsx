import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { countTotalByItem } from "../../../helpers/countTotalByItem";
import { ICartListItem } from "../../../interfaces/cartListItem";

import "./cartListItem.scss";

const CartListItem: FunctionComponent<ICartListItem> = ({
  i,
  page,
  limit,
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
  const [counter, setCounter] = useState<number>(count);
  const [total, setTotal] = useState<number>(price);

  const incCounter = (): void => {
    if (counter < stock) {
      setCounter((counter) => counter + 1);
    }
  };

  const decCounter = (): void => {
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
      <div className="cart__item-number">{i + 1 + limit * (page - 1)}</div>
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={name} className="cart__item-img" />
      </Link>
      <div className="cart__item-desc">
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
      </div>
    </li>
  );
};

export default CartListItem;
