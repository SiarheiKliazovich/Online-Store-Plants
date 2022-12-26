import { useState, FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

import Modal from "../Modal";

const Cart: FunctionComponent = () => {
  const location = useLocation();

  let state = false;
  if (location.state) {
    state = location.state.show;
  }

  const [showModal, setShowModal] = useState(state);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Cart;
