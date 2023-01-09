import { IShoppingCart } from "../interfaces/shoppingCart";

export interface IModal {
  onClose: () => void;
  show: boolean;
  setShoppingCart: (value: IShoppingCart[]) => void;
}
