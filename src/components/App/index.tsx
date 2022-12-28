import { useState, FunctionComponent, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { IShoppingCart } from "../../interfaces/shoppingCart";
import Header from "../Header";
import Products from "../Products";
import Footer from "../Footer";
import Product from "../Product";
import Cart from "../Cart";
import NotFound from "../NotFound";
import products from "../../data/products";
import { IProduct } from "./../..//interfaces/product";

const App: FunctionComponent = () => {
  const cart = localStorage.getItem("cart");
  const cartObj = cart ? JSON.parse(cart) : [];

  const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>(cartObj);

  const addToShoppingCart = (id: number): void => {
    const prodInShoppingCart = shoppingCart.filter(
      (product: IShoppingCart) => product.id === id
    );

    if (prodInShoppingCart.length > 0) {
      setShoppingCart(
        shoppingCart.filter((product: IShoppingCart) => product.id !== id)
      );
    } else {
      setShoppingCart([
        ...shoppingCart,
        {
          id,
          count: 1,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const sumPrices = (): number => {
    const prodToCart: IProduct[] = [];
    shoppingCart.forEach((prod) =>
      prodToCart.push(
        products.find((product: IProduct) => product.id === prod.id)!
      )
    );
    return prodToCart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  };

  const sumCount = (): number => {
    return shoppingCart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0);
  };

  return (
    <>
      <Header sumPrices={sumPrices()} sumCount={sumCount()} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/product/:productId"
          element={
            <Product
              shoppingCart={shoppingCart}
              addToShoppingCart={addToShoppingCart}
            />
          }
        />
        <Route
          path="/"
          element={
            <Products
              shoppingCart={shoppingCart}
              addToShoppingCart={addToShoppingCart}
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
