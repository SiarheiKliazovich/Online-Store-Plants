import { FunctionComponent } from "react";

import "./buttonCart.scss";

interface IProps {
  cart: number[];
  id: number;
  addInShoppingCart: (id: number) => void;
}

export const ButtonCart: FunctionComponent<IProps> = ({
  cart,
  id,
  addInShoppingCart,
}) => {
  if (cart.indexOf(id) > -1) {
    return (
      <button className="product__button" disabled>
        In Cart
      </button>
    );
  } else {
    return (
      <button className="product__button" onClick={() => addInShoppingCart(id)}>
        Add To Cart
      </button>
    );
  }
};
