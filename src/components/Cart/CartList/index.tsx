import { FunctionComponent, useState } from "react";

import { CartListType } from "../../../types";
import products from "../../../data/products";
import CartListItem from "../CartListItem";
import "./cartList.scss";

const CartList: FunctionComponent<CartListType> = ({
  shoppingCart,
  updateCart,
  deleteFromCart,
  sumPrices,
  sumCount,
  setShowModal,
}: CartListType) => {
  const [selectValue, setSelectValue] = useState(3);

  const [code, setCode] = useState("");
  const [messageCode, setMessageCode] = useState("");

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectValue(+e.target.value);
  };

  const promoCodes = [
    { code: "rs", name: "Rolling Scopes School", amount: 10 },
    { code: "epm", name: "EPAM Systems", amount: 10 },
  ];

  let showAvailableCode = false;
  let availableCode: number;
  const checkPromoCode = (value: string) => {
    promoCodes.map((item, i) => {
      if (item.code === value.toLowerCase()) {
        showAvailableCode = true;
        console.log(showAvailableCode);
        setMessageCode(promoCodes[i].name);
      }
    });
  };

  const codeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
    checkPromoCode(e.target.value);
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
        <div className="cart__msg">Cart is empty</div>
      )}
      {shoppingCart.length !== 0 && (
        <div className="cart__summary">
          <div className="summary__title">Summary</div>
          <div className="summary__items">Products: {sumCount}</div>
          <div className="summary__amount">Total: {sumPrices}$</div>
          <div className="summary__promo">
            <div className="promo__input">
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => codeHandler(e)}
              />
              {messageCode && <div className="promo__msg">{messageCode}</div>}
            </div>
            <div className="promo__codes">Promo for test: 'RS', 'EPM'</div>
          </div>
          <button className="cart__button" onClick={() => setShowModal(true)}>
            Buy
          </button>
        </div>
      )}
    </>
  );
};

export default CartList;
