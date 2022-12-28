import { IProduct } from "../interfaces/product";
import { getSortedValues } from "./sorting";

export const getSearchProducts = (searchQuery: string, products: IProduct[]) =>
  products.filter((product: IProduct) =>
    product.name.includes(searchQuery)
  ) as IProduct[];

export const getProducts = (
  searchQuery: string,
  sorting: string,
  categories: string[],
  brands: string[],
  prices: number[],
  stocks: number[],
  products: IProduct[]
): IProduct[] => {
  const filteredProducts = products
    .filter((product: IProduct) =>
      categories.length ? categories.includes(product.category) : product
    )
    .filter((product: IProduct) =>
      brands.length ? brands.includes(product.brand) : product
    )
    .filter((product: IProduct) =>
      prices.length
        ? product.price >= prices[0] && product.price <= prices[1]
        : product
    )
    .filter((product: IProduct) =>
      stocks.length
        ? product.stock >= stocks[0] && product.stock <= stocks[1]
        : product
    )
    .filter((product: IProduct) =>
      searchQuery ? product.name.includes(searchQuery) : product
    );
  return getSortedValues(sorting, filteredProducts);
};
