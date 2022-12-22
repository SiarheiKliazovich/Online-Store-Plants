import { IProduct } from "../interfaces/product";

export const getSearchProducts = (searchQuery: string, products: IProduct[]) =>
  products.filter((product) =>
    product.name.includes(searchQuery)
  ) as IProduct[];
