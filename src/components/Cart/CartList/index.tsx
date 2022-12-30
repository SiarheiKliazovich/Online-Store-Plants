import { FunctionComponent, useState, useEffect } from "react";
import { CartListType } from "../../../types";
import products from "../../../data/products";
import CartListItem from "../CartListItem";
import { useSearchParams } from "react-router-dom";
import "./cartList.scss";

const CartList: FunctionComponent<CartListType> = ({
  shoppingCart,
  updateCart,
  deleteFromCart,
  sumPrices,
  sumCount,
  setShowModal,
}: CartListType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const URLParams = Object.fromEntries([...searchParams]);
  const [limitValue, setlimitValue] = useState(
    URLParams.limit ? parseInt(URLParams.limit, 10) : 3
  );
  const [page, setPage] = useState(
    URLParams.page ? parseInt(URLParams.page, 10) : 1
  );
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
    if (shoppingCart.length === limitValue && cart.length === 0) {
      setPage((page) => page - 1);
    }
  }, [cart, shoppingCart]);

  useEffect(() => {
    if (cart.length === 0) {
      setPage((page) => page - 1);
    }
    updateViewCart();
  }, [shoppingCart]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      page: page.toString(),
    });
  }, [page]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      limit: limitValue.toString(),
    });
  }, [limitValue]);

  const [code, setCode] = useState("");
  const [messageCode, setMessageCode] = useState("");

  const promoCodes = [
    { code: "rs", name: "Rolling Scopes School", amount: 10 },
    { code: "epm", name: "EPAM Systems", amount: 10 },
  ];

  let showAvailableCode = false;
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
            {cart.map((item) => (
              <CartListItem
                key={item.id}
                {...products[item.id - 1]}
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
              {showAvailableCode ? <div>{messageCode}</div> : ""}
            </div>
            <div className="promo__codes">Promo for test: 'RS', 'EPM'</div>
            <button className="promo__button">Check</button>
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
