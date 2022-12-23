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
import { getSortedValues } from "../../helpers/sorting";

const Products = () => {
  const [view, setView] = useState("grid");
  const [sorting, setSorting] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setProductList(getSearchProducts(searchQuery, products));
  }, [searchQuery]);

  useEffect(() => {
    setProductList(getSortedValues(sorting, products));
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
            <div className="not-found">No products found 😏</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
