import { IShoppingCart } from "../../interfaces/shoppingCart";

export const productsInCart = (
  id: number,
  shoppingCart: IShoppingCart[]
): IShoppingCart[] => shoppingCart.filter((product) => product.id === id);
