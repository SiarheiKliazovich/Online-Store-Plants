import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header";
import Home from "../Home";
import Products from "../Products";
import About from "../About";
import Footer from "../Footer";
import Product from "../Product";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
