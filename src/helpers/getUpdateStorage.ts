import { CartType } from "../types";

export const getUpdateStotage = () => {
  const cart = localStorage.getItem("cart");
  let parseCart: CartType[] = [];
  if (typeof cart === "string") {
    parseCart = JSON.parse(cart);
  }

  return parseCart;
};
