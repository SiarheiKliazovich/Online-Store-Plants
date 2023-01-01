import { useState, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { CartNewType } from "../../types";
import Modal from "../Modal";
import CartList from "./CartList";

import "./cart.scss";

const Cart: FunctionComponent<CartNewType> = ({
  shoppingCart,
  updateCart,
  deleteFromCart,
  sumPrices,
  sumCount,
  setShoppingCart,
}: CartNewType) => {
  const location = useLocation();

  let stateShowModal = false;
  if (location.state) {
    stateShowModal = location.state.show;
  }

  const [showModal, setShowModal] = useState<boolean>(stateShowModal);
  return (
    <>
      <div className="cart__wrapper container">
        {
          <CartList
            shoppingCart={shoppingCart}
            updateCart={updateCart}
            deleteFromCart={deleteFromCart}
            sumPrices={sumPrices}
            sumCount={sumCount}
            setShowModal={setShowModal}
          />
        }
      </div>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        setShoppingCart={setShoppingCart}
      />
    </>
  );
};

export default Cart;
