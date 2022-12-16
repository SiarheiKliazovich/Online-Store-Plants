import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header";
import Home from "../Home";
import ProductItem from "../ProductItem";
import Products from "../Products";
import About from "../About";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productitem" element={<ProductItem />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
