import products from "../data/products";

// TODO: -> helpers/filters
export const getFilters = () => {
  const newBrand: string[] = [];
  const newPrice: number[] = [];
  const newCateg: string[] = [];
  const newStock: number[] = [];
  // TODO: to separate functin formatProductItem -> helpers/filters

  // const formatProductItem = (products: IProduct[], arr, property) =>
  //   products.map((product) => arr.push(product[property]));

  products.map((product) => newCateg.push(product.category));
  products.map((product) => newBrand.push(product.brand));
  products.map((product) => newPrice.push(product.price));
  products.map((product) => newStock.push(product.stock));
  // TODO: to separate functin getUniqueArray(arr) -> helpers/filters
  // const getUniqueArray= (arr) => {
  //  const arr = filter((element, index) => {
  //   return .indexOf(element) === index;
  // }

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
        //TODO to separate function
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
    prices,
    stocks,
  };
};
