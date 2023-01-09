import { useState, FunctionComponent, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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

  const updateCart = (id: number, count: number): void => {
    const cart = shoppingCart.map((product) => {
      if (product.id === id) {
        return { ...product, count };
      }
      return product;
    });
    setShoppingCart(cart);
  };

  const deleteFromCart = (id: number): void => {
    const cart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(cart);
  };

  const addToShoppingCart = (id: number, count = 1): void => {
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
          count,
        },
      ]);
    }
  };

  const sumPrices = (): number => {
    const prodToCart: IProduct[] = [];
    shoppingCart.forEach((prod) =>
      prodToCart.push(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        products.find((product: IProduct) => product.id === prod.id)!
      )
    );
    return prodToCart.reduce((prev, curr) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const product = shoppingCart.find((prod) => prod.id === curr.id)!;
      return prev + curr.price * product.count;
    }, 0);
  };

  const sumCount = (): number => {
    return shoppingCart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <BrowserRouter>
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
        <Route
          path="/cart"
          element={
            <Cart
              shoppingCart={shoppingCart}
              updateCart={updateCart}
              deleteFromCart={deleteFromCart}
              sumPrices={sumPrices()}
              sumCount={sumCount()}
              setShoppingCart={setShoppingCart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
