import { IProduct } from "../interfaces/product";

export const getSortedAscRating = (products: IProduct[]) =>
  products.sort((current, next) =>
    current.rating < next.rating ? 1 : -1
  ) as IProduct[];

export const getSortedDescRating = (products: IProduct[]) =>
  products.sort((current, next) =>
    current.rating > next.rating ? 1 : -1
  ) as IProduct[];

export const getSortedAscPrice = (products: IProduct[]) =>
  products.sort((current, next) =>
    current.price < next.price ? 1 : -1
  ) as IProduct[];

export const getSortedDescPrice = (products: IProduct[]) =>
  products.sort((current, next) =>
    current.price > next.price ? 1 : -1
  ) as IProduct[];

export const getSortedValues = (sorting: string, products: IProduct[]) => {
  console.log("sorting", sorting);
  switch (sorting) {
    case "ratingASC":
      return getSortedAscRating(products);
    case "ratingDESC":
      return getSortedDescRating(products);
    case "priceASC":
      return getSortedAscPrice(products);
    case "priceDESC":
      return getSortedDescPrice(products);
    default:
      return products;
  }
};
