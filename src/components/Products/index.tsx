import BannerTitle from "../BannerTitle";
import { IProduct } from "./../../interface/product";
import Filter from "../Filters";
import ProductGrid from "../ProductGrid";
import "./Products.scss";
import Sorting from "../Sorting";
import { useState, useEffect } from "react";
import View from "../View";
import Search from "../Search";
import products from "../../data/products";

const Products = () => {
  const [view, setView] = useState("grid");
  const [sorting, setSorting] = useState("ratingASC");
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState(products);
  const getSearchProducts: IProduct[] = products.filter((product) =>
    product.name.includes(searchQuery)
  );

  useEffect(() => {
    setProductList(getSearchProducts);
  }, [searchQuery]);

  return (
    <main className="main">
      <BannerTitle title="Products" />
      <div className="container">
        <div className="main__wrapper">
          <div className="main__filter">
            <Filter />
          </div>
          <div className="main__product">
            <div className="view-sorting">
              <View view={view} setView={setView} />
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Sorting sorting={sorting} setSorting={setSorting} />
            </div>
            <ProductGrid view={view} products={productList} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
