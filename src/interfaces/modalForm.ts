import { IShoppingCart } from "../interfaces/shoppingCart";

export interface IModalForm {
  setModalContent: (a: boolean) => void;
  setShoppingCart: (value: IShoppingCart[]) => void;
}
