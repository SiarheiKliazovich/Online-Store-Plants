import { IProduct } from "../interfaces/product";

export interface ICartListItem extends IProduct {
  count: number;
  updateCart: (id: number, count: number) => void;
  deleteFromCart: (id: number) => void;
}
