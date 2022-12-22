import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header";
import Modal from "../Modal";
import Footer from "../Footer";

const Cart = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Header /> 
        <button onClick={() => setShow(true)}>Show modal</button>
        <Modal onClose={() => setShow(false)} show={show} />
		  <Footer />
    </>
  );
};