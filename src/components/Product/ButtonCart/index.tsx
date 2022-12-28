import { FunctionComponent } from "react";
import { IShoppingCart } from "../../../interfaces/shoppingCart";

import "./buttonCart.scss";

interface IProps {
  shoppingCart: IShoppingCart[];
  id: number;
  addToShoppingCart: (id: number) => void;
}

export const ButtonCart: FunctionComponent<IProps> = ({
  shoppingCart,
  id,
  addToShoppingCart,
}) => {
  const prodInShoppingCart = (id: number) =>
    shoppingCart.filter((product) => product.id === id);
  return (
    <button className="product__button" onClick={() => addToShoppingCart(id)}>
      {prodInShoppingCart(id).length === 0 ? "Add to cart" : "Drop from cart"}
    </button>
  );
};
