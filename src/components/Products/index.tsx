import BannerTitle from "../BannerTitle";
import Filter from "../Filters";
import ProductGrid from "../ProductGrid";
import "./Products.scss";
import Sorting from "../Sorting";
import { useState } from "react";
import View from "../View";

const Products = () => {
  const [view, setView] = useState("grid");
  console.log("render");
  console.log(view);
  return (
    <main className="main">
      <BannerTitle />
      <div className="container">
        <div className="main__wrapper">
          <div className="main__filter">
            <Filter />
          </div>
          <div className="main__product">
            <div className="view-sorting">
              <View view={view} setView={setView} />
              <Sorting />
            </div>
            <ProductGrid view={view} setView={setView} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
