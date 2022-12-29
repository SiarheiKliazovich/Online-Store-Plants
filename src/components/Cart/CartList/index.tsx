import { FunctionComponent, useState } from "react";
import { CartListType } from "../../../types";
import products from "../../../data/products";
import CartListItem from "../CartListItem";
import "./cartList.scss";

const CartList: FunctionComponent<CartListType> = ({
  shoppingCart,
  updateCart,
  deleteFromCart,
}: CartListType) => {
  const [selectValue, setSelectValue] = useState(3);
  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectValue(+e.target.value);
  };

  return (
    <>
      {shoppingCart.length !== 0 && (
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
          <div className="cart__items">
            {shoppingCart.map((item, i) => (
              <CartListItem
                key={item.id}
                {...products[item.id - 1]}
                i={i}
                count={item.count}
                updateCart={updateCart}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>
        </div>
      )}
      {shoppingCart.length === 0 && (
        <div className="cart__text">Cart is empty</div>
      )}
    </>
  );
};

export default CartList;
