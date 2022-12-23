import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Modal from "../Modal";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show modal</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
};

export default Cart;
