import { IProdFilter } from "../interfaces/productFilters";
import { IProduct } from "../interfaces/product";

export const getFilters = (products: IProduct[]): IProdFilter => {
  const newBrand: string[] = [];
  const newPrice: number[] = [];
  const newCateg: string[] = [];
  const newStock: number[] = [];

  products.map((product: IProduct) => newCateg.push(product.category));
  products.map((product) => newBrand.push(product.brand));
  products.map((product) => newPrice.push(product.price));
  products.map((product) => newStock.push(product.stock));

  const categories = newCateg.filter((element: string, index: number) => {
    return newCateg.indexOf(element) === index;
  });
  const brands = newBrand.filter((element: string, index: number) => {
    return newBrand.indexOf(element) === index;
  });
  const prices = newPrice.filter((element: number, index: number) => {
    return newPrice.indexOf(element) === index;
  });
  const stocks = newStock.filter((element: number, index: number) => {
    return newStock.indexOf(element) === index;
  });

  return {
    categories: categories.map((category: string) => {
      return {
        title: category,
        filtered: 0,

        allProductsCount: products.filter(
          (product: IProduct) => product.category === category
        ).length,
      };
    }),
    brands: brands.map((brand: string) => {
      return {
        title: brand,
        filtered: 0,
        allBrandCount: products.filter(
          (product: IProduct) => product.brand === brand
        ).length,
      };
    }),
    prices: [Math.min.apply(null, prices), Math.max.apply(null, prices)],
    stocks: [Math.min.apply(null, stocks), Math.max.apply(null, stocks)],
  };
};
