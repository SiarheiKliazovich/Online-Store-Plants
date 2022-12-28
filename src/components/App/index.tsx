import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "../Header";
import Products from "../Products";
import Footer from "../Footer";
import Product from "../Product";
import Cart from "../Cart";
import NotFound from "../NotFound";

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

  // это временно для отображения данных в корзине
  const shopCart = [
    { id: 1, count: 1 },
    { id: 2, count: 1 },
  ];
  localStorage.setItem("cart", JSON.stringify(shopCart));

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
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
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
