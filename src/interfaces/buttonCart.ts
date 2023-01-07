import { IShoppingCart } from "./shoppingCart";

export interface IButtonCart {
  shoppingCart: IShoppingCart[];
  id: number;
  addToShoppingCart: (id: number) => void;
}
