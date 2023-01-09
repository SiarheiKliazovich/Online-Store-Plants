import { IProduct } from "../../interfaces/product";
import { getSortedValues } from "../sorting/sorting";

export const getSearchProducts = (searchQuery: string, product: IProduct) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
  String(product.rating).includes(searchQuery) ||
  String(product.price).includes(searchQuery) ||
  String(product.stock).includes(searchQuery);

export const getProducts = (
  searchQuery: string,
  sorting: string,
  categories: string[],
  brands: string[],
  prices: number[],
  stocks: number[],
  products: IProduct[]
): IProduct[] => {
  const isPricesNaN = prices.filter((price) => price === 0).length;
  const isStockNaN = stocks.filter((stock) => stock === 0).length;

  const filteredProducts = products
    .filter((product: IProduct) =>
      categories.length ? categories.includes(product.category) : product
    )
    .filter((product: IProduct) =>
      brands.length ? brands.includes(product.brand) : product
    )
    .filter((product: IProduct) =>
      prices.length && isPricesNaN === 0
        ? product.price >= prices[0] && product.price <= prices[1]
        : product
    )
    .filter((product: IProduct) =>
      stocks.length && isStockNaN === 0
        ? product.stock >= stocks[0] && product.stock <= stocks[1]
        : product
    )
    .filter((product: IProduct) =>
      searchQuery ? getSearchProducts(searchQuery, product) : product
    );
  return getSortedValues(sorting, filteredProducts);
};
