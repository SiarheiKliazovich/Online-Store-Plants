import { useState, useEffect } from "react";
import { getSearchProducts } from "../../helpers/search";
import { useSearchParams } from "react-router-dom";
import "./Products.scss";
import products from "../../data/products";
import BannerTitle from "../BannerTitle";
import Filters from "../Filters";
import ProductGrid from "../ProductGrid";
import Sorting from "../Sorting";
import View from "../View";
import Search from "../Search";
import { getSortedValues } from "../../helpers/sorting";
import { IFilter } from "@/src/interfaces/filter";
// import { getFilters } from "../../helpers/filter";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const URLParams = Object.fromEntries([...searchParams]);
  const [view, setView] = useState("grid");
  const [sorting, setSorting] = useState(URLParams.sort ? URLParams.sort : "");
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState<IFilter>({
    categories: [],
    brands: [],
    prices: [],
    stocks: [],
  });

  /* 
    const user = {
      name: 'Vasya',
      age: '35;
    }

    user.weight = 100 // change (muttable) object
    const user1 = {
      ...user,
      weight: 100
    }
    useEffect(() => {
      if (filters) {
        const params = Object.fromEntries([...searchParams]);

    setFilters( {
      ...filters, // destructuring, ES6 feature 
      categories: [...filters.categories, e.target.value]
    })
  */
  // useEffect(() => {
  //   setProductList(getFilters(filters, products));
  // }, [filters]);

  console.log("filters", filters);
  useEffect(() => {
    if (sorting) {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams({
        ...params,
        sort: sorting,
      });
    }
    setProductList(getSortedValues(sorting, products));
  }, [sorting]);

  useEffect(() => {
    if (searchQuery) {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams({
        ...params,
        search: searchQuery,
      });
    }
    setProductList(getSearchProducts(searchQuery, products));
  }, [searchQuery]);

  return (
    <main className="main">
      <BannerTitle title="Products" />
      <div className="container">
        <div className="main__wrapper">
          <div className="main__filter">
            <Filters setFilters={setFilters} filters={filters} />
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
            {productList.length === 0 && (
              <div className="not-found">No products found 😏</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
