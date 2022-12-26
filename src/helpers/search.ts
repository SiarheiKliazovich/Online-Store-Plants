import { IProduct } from "../interfaces/product";
import { getSortedValues } from "./sorting";

export const getSearchProducts = (searchQuery: string, products: IProduct[]) =>
  products.filter((product) =>
    product.name.includes(searchQuery)
  ) as IProduct[];

export const getProducts = (
  searchQuery: string,
  sorting: string,
  categories: string[],
  brands: string[],
  products: IProduct[]
) => {
  const filteredProducts = products
    .filter((product) =>
      categories.length ? categories.includes(product.category) : product
    )
    .filter((product) =>
      brands.length ? brands.includes(product.brand) : product
    )
    .filter((product) =>
      searchQuery ? product.name.includes(searchQuery) : product
    );
  return getSortedValues(sorting, filteredProducts);
};
