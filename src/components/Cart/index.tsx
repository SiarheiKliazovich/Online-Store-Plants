import { useState, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

import Modal from "../Modal";
import CartList from "./CartList";

import "./cart.scss";

const Cart: FunctionComponent = () => {
  const location = useLocation();

  let stateShowModal = false;
  if (location.state) {
    stateShowModal = location.state.show;
  }

  const [showModal, setShowModal] = useState(stateShowModal);

  const cart = localStorage.getItem("cart");

  let parseCart;
  if (typeof cart === "string") {
    parseCart = JSON.parse(cart);
  }

  const textMessage = <div className="cart__text">Cart is empty</div>;

  return (
    <>
      <div className="cart__wrapper container">
        {parseCart ? <CartList /> : textMessage}
      </div>
      {/* <button onClick={() => setShowModal(true)}>Show modal</button> */}
      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Cart;
