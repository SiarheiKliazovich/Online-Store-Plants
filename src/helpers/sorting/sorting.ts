import { IProduct } from "../../interfaces/product";

export const getSortedAscRating = (products: IProduct[]) =>
  products.sort((current, next) => current.rating - next.rating) as IProduct[];

export const getSortedDescRating = (products: IProduct[]) =>
  products.sort((current, next) => next.rating - current.rating) as IProduct[];

export const getSortedAscPrice = (products: IProduct[]) =>
  products.sort((current, next) => current.price - next.price) as IProduct[];

export const getSortedDescPrice = (products: IProduct[]) =>
  products.sort((current, next) => next.price - current.price) as IProduct[];

export const getSortedValues = (
  sorting: string,
  productList: IProduct[]
): IProduct[] => {
  const products = [...productList];
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
