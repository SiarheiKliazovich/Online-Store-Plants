import { useState, useEffect } from "react";
import { getSearchProducts } from "../../helpers/search";
import "./Products.scss";
import products from "../../data/products";
import BannerTitle from "../BannerTitle";
import Filter from "../Filters";
import ProductGrid from "../ProductGrid";
import Sorting from "../Sorting";
import View from "../View";
import Search from "../Search";

const Products = () => {
  const [view, setView] = useState("grid");
  const [sorting, setSorting] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState(products);

  const getSortedValues = () => {
    if (sorting === "ratingASC")
      return products.sort((current, next) => current.rating - next.rating);
    if (sorting === "ratingDESC")
      return products.sort((current, next) => next.rating - current.rating);
    if (sorting === "priceASC")
      return products.sort((current, next) => current.price - next.price);
    if (sorting === "priceDESC")
      return products.sort((current, next) => next.price - current.price);
    return products;
  };

  useEffect(() => {
    setProductList(getSearchProducts(searchQuery, products));
  }, [searchQuery]);

  useEffect(() => {
    console.log(sorting);
    setProductList(getSortedValues());
  }, [sorting]);

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
