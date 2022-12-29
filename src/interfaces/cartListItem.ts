import { IProduct } from "../interfaces/product";

export interface ICartListItem extends IProduct {
  i: number;
  count: number;
  updateCart: (id: number, count: number) => void;
  deleteFromCart: (id: number) => void;
}
