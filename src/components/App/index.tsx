import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "../Header";
import Home from "../Home";
import Products from "../Products";
import About from "../About";
import Footer from "../Footer";
import Product from "../Product";
import Cart from "../Cart";

const App = () => {
  const [inShoppingCart, setInShoppinfCart] = useState([2]);

  const addInShoppingCart = (id: number): void => {
    if (inShoppingCart.indexOf(id) === -1) {
      setInShoppinfCart(() => {
        const newArr = [...inShoppingCart, id];
        return newArr;
      });
    }
  };

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/product/:productId"
          element={
            <Product
              inShoppingCart={inShoppingCart}
              addInShoppingCart={addInShoppingCart}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
