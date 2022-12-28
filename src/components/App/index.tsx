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
  // const [inShoppingCart, setInShoppinfCart] = useState([2]);

  // const addInShoppingCart = (id: number): void => {
  //   if (inShoppingCart.indexOf(id) === -1) {
  //     setInShoppinfCart(() => {
  //       const newArr = [...inShoppingCart, id];
  //       return newArr;
  //     });
  //   }
  // };

  const [shoppingCart, setShoppingCart] = useState(
    localStorage.getItem("cart") ? localStorage.getItem("cart") : []
  );
  console.log(shoppingCart);
  const addToShoppingCart = (id) => {
    return localStorage.setItem("cart", [
      ...shoppingCart,
      {
        id: id,
        count: 1,
      },
    ]);
  };
  return (
    <>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/product/:productId"
          element={
            <Product
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
        <Route
          path="/"
          element={
            <Products
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
