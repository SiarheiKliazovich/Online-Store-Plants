import { IProduct } from "../interfaces/product";

export const getFilters = (products: IProduct[]) => {
  const newBrand: string[] = [];
  const newPrice: number[] = [];
  const newCateg: string[] = [];
  const newStock: number[] = [];

  products.map((product) => newCateg.push(product.category));
  products.map((product) => newBrand.push(product.brand));
  products.map((product) => newPrice.push(product.price));
  products.map((product) => newStock.push(product.stock));

  const categories = newCateg.filter((element, index) => {
    return newCateg.indexOf(element) === index;
  });
  const brands = newBrand.filter((element, index) => {
    return newBrand.indexOf(element) === index;
  });
  const prices = newPrice.filter((element, index) => {
    return newPrice.indexOf(element) === index;
  });
  const stocks = newStock.filter((element, index) => {
    return newStock.indexOf(element) === index;
  });

  return {
    categories: categories.map((category) => {
      return {
        title: category,
        filtered: 0,

        allProductsCount: products.filter(
          (product) => product.category === category
        ).length,
      };
    }),
    brands: brands.map((brand) => {
      return {
        title: brand,
        filtered: 0,
        allBrandCount: products.filter((product) => product.brand === brand)
          .length,
      };
    }),
    prices: [Math.min.apply(null, prices), Math.max.apply(null, prices)],
    stocks: [Math.min.apply(null, stocks), Math.max.apply(null, stocks)],
  };
};
