import { FunctionComponent, useState, useEffect } from "react";
import { CartListType } from "../../../types";
import products from "../../../data/products";
import CartListItem from "../CartListItem";
import "./cartList.scss";

const CartList: FunctionComponent<CartListType> = ({
  shoppingCart,
  updateCart,
  deleteFromCart,
}: CartListType) => {
  const [limitValue, setlimitValue] = useState(3);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState(shoppingCart.slice(0, page * limitValue));

  const updateViewCart = (): void => {
    if (page * limitValue - limitValue <= 0) {
      setCart(shoppingCart.slice(0, page * limitValue));
    } else if (page * limitValue >= shoppingCart.length) {
      setCart(
        shoppingCart.slice(page * limitValue - limitValue, page * limitValue)
      );
    } else {
      setCart(
        shoppingCart.slice(page * limitValue - limitValue, page * limitValue)
      );
    }
  };

  const handleLimitValue = (value: string): void => {
    setlimitValue(+value);
    if (page * parseInt(value, 10) > shoppingCart.length) {
      setPage((page) => page - 1);
    }
  };

  const nextPage = (): void => {
    if (page < Math.ceil(shoppingCart.length / limitValue)) {
      setPage((page) => page + 1);
    }
  };

  const prevPage = (): void => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  useEffect(() => {
    updateViewCart();
  }, [limitValue, page]);

  useEffect(() => {
    if (cart.length === 0) {
      setPage((page) => page - 1);
    }
  }, [shoppingCart]);

  return (
    <>
      {shoppingCart.length !== 0 && (
        <div className="cart__content">
          <div className="pagination__wrapper">
            <div className="cart__title">Products In Cart</div>
            <div className="cart__pag">
              Limit:
              <input
                className="pag__input"
                type="number"
                value={limitValue}
                min={1}
                max={shoppingCart.length}
                onChange={(e) => handleLimitValue(e.target.value)}
              />
            </div>
            <div className="page__number">
              Page:
              <button onClick={prevPage} className="next__page">
                {"<"}
              </button>
              <span className="numder-page">{page}</span>
              <button onClick={nextPage} className="prev__page">
                {">"}
              </button>
            </div>
          </div>
          <div className="cart__header">
            <div className="header__name">Product</div>
            <div className="header__price">Price</div>
            <div className="header__quantity">Quantity</div>
            <div className="header__total">Total</div>
          </div>
          <div className="cart__items">
            {cart.map((item, i) => (
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
