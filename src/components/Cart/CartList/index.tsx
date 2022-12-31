import { FunctionComponent, useState, useEffect } from "react";
import { CartListType, PromoCodeType } from "../../../types";
import products from "../../../data/products";
import CartListItem from "../CartListItem";
import { sumPricesDisc } from "../../../helpers/sumPricesDisc";
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

  const codes = localStorage.getItem("promo");
  const codesParseObj = codes ? JSON.parse(codes) : [];
  const [appliedCodes, setAppliedCodes] = useState(codesParseObj);

  const [showAppliedCodes, setShowAppliedCodes] = useState(
    appliedCodes.length === 0 ? false : true
  );

  const [showButtonAdd, setShowButtonAdd] = useState(true);

  const promoCodes = [
    { id: "rs", name: "Rolling Scopes School", disc: 10 },
    { id: "epm", name: "EPAM Systems", disc: 10 },
  ];

  const isShowButtonAdd = (id: string): void => {
    appliedCodes.forEach((item: PromoCodeType) => {
      if (item.id === id) {
        setShowButtonAdd(false);
      }
    });
  };

  const checkPromoCode = (value: string): void => {
    setMessageCode("");
    setShowButtonAdd(true);
    promoCodes.forEach((item) => {
      if (item.id === value.toLowerCase()) {
        isShowButtonAdd(item.id);
        setMessageCode(item.id);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("promo", JSON.stringify(appliedCodes));
    if (appliedCodes.length === 0) {
      setShowAppliedCodes(false);
    } else {
      setShowAppliedCodes(true);
    }
  }, [appliedCodes]);

  const codeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
    checkPromoCode(e.target.value);
  };

  const applyCode = (): void => {
    promoCodes.forEach((item) => {
      if (messageCode === item.id) {
        setAppliedCodes([...appliedCodes, item]);
      }
    });
    setShowButtonAdd(false);
  };

  const dropCode = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const id = e.currentTarget.dataset.id;
    setAppliedCodes(
      appliedCodes.filter((item: PromoCodeType) => item.id !== id)
    );
    if (typeof id === "string" && messageCode === id) {
      setShowButtonAdd(true);
    }
  };

  const nameCode = promoCodes
    .filter((item) => item.id === messageCode)
    .map((item) => item.name);

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
                page={page}
                limit={limitValue}
                i={i}
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
          <div
            className={
              showAppliedCodes ? "summary__amount crossed" : "summary__amount"
            }
          >
            Total: {sumPrices}$
          </div>
          {showAppliedCodes && (
            <div className="summary__amount">
              Total: {sumPricesDisc(appliedCodes, sumPrices)}$
            </div>
          )}
          <div className="summary__promo">
            {showAppliedCodes && (
              <div className="promo__active">
                <div className="promo__active-title">Applied codes:</div>
                <div className="promo__active-codes">
                  {appliedCodes.map((item: PromoCodeType, i: number) => {
                    return (
                      <div key={i} className="promo__active-code">
                        <div className="promo__active-name">
                          {item.name} - 10%
                        </div>
                        <button
                          className="promo__active-button"
                          onClick={(e) => dropCode(e)}
                          data-id={item.id}
                        >
                          Drop
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="promo__input">
              <input
                type="search"
                id="code"
                value={code}
                onChange={(e) => codeHandler(e)}
              />
              {messageCode && (
                <>
                  <div className="promo__msg">{nameCode} - 10%</div>
                  {showButtonAdd && (
                    <button className="promo__button" onClick={applyCode}>
                      Add
                    </button>
                  )}
                </>
              )}
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
