import { PromoCodeType } from "../types";

export const sumPricesDisc = (
  array: PromoCodeType[],
  price: number
): string => {
  if (array.length === 2) {
    return (price * 0.8).toFixed(1);
  } else {
    return (price * 0.9).toFixed(1);
  }
};
