import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.scss";
import products from "../../data/products";
import BannerTitle from "../BannerTitle";
import Filters from "../Filters";
import ProductGrid from "../ProductGrid";
import Sorting from "../Sorting";
import View from "../View";
import Search from "../Search";
import { IFilter } from "./../../interfaces/filter";
import { getProducts } from "./../../helpers/search";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const URLParams = Object.fromEntries([...searchParams]);
  const [view, setView] = useState(URLParams.view ? URLParams.view : "grid");
  const [sorting, setSorting] = useState(URLParams.sort ? URLParams.sort : "");
  const [searchQuery, setSearchQuery] = useState(
    URLParams.search ? URLParams.search : ""
  );
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState<IFilter>({
    categories:
      URLParams.categories && URLParams.categories.length !== 0
        ? URLParams.categories.split(",")
        : [],
    brands:
      URLParams.brands && URLParams.brands.length !== 0
        ? URLParams.brands.split(",")
        : [],
    prices: [],
    stocks: [],
  });
  const filterReset = () => {
    setSearchParams({});
    setFilters({ categories: [], brands: [], prices: [], stocks: [] });
    setSorting("");
    setSearchQuery("");
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      categories: filters.categories.join(","),
      brands: filters.brands.join(","),
    });

    setProductList(
      getProducts(
        searchQuery,
        sorting,
        filters.categories,
        filters.brands,
        products
      )
    );
  }, [filters]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      sort: sorting,
    });

    setProductList(
      getProducts(
        searchQuery,
        sorting,
        filters.categories,
        filters.brands,
        products
      )
    );
  }, [sorting]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      search: searchQuery,
    });

    setProductList(
      getProducts(
        searchQuery,
        sorting,
        filters.categories,
        filters.brands,
        products
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      view: view,
    });
  }, [view]);

  return (
    <main className="main">
      <BannerTitle title="Products" />
      <div className="container">
        <div className="main__wrapper">
          <div className="main__filter">
            <Filters
              setFilters={setFilters}
              filters={filters}
              productList={productList}
              filterReset={filterReset}
            />
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
