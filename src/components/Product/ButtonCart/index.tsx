import { FunctionComponent } from "react";
import { IShoppingCart } from "../../../interfaces/shoppingCart";
import { IButtonCart } from "../../../interfaces/buttonCart";

import "./buttonCart.scss";

export const ButtonCart: FunctionComponent<IButtonCart> = ({
  shoppingCart,
  id,
  addToShoppingCart,
}) => {
  const prodInShoppingCart = (id: number) =>
    shoppingCart.filter((product: IShoppingCart) => product.id === id);
  return (
    <button className="product__button" onClick={() => addToShoppingCart(id)}>
      {prodInShoppingCart(id).length === 0 ? "Add to cart" : "Drop from cart"}
    </button>
  );
};
