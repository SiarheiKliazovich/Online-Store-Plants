import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import Header from "../Header";
import Home from "../Home";
import Product from "../Product";
import ProductGrid from "../ProductGrid";
import About from "../About";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
