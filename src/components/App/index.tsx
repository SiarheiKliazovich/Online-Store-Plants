import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "../Header";

import Products from "../Products";

import Footer from "../Footer";
import Product from "../Product";

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
        <Route
          path="/product/:productId"
          element={
            <Product
              inShoppingCart={inShoppingCart}
              addInShoppingCart={addInShoppingCart}
            />
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
