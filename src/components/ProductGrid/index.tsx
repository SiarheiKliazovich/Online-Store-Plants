import products from "../../data/products";
import ProductItem from "./ProductItem";
import "./ProductGrid.scss";
import classNames from "classnames";
import { FunctionComponent } from "react";

type ProductGridType = {
  view: string;
  setView: (s: string) => void;
};

const ProductGrid: FunctionComponent<ProductGridType> = ({
  view,
  setView,
}: ProductGridType) => {
  return (
    <div
      className={classNames("maim__product_wrapper", {
        " line ": view === "line",
      })}
    >
      {products.map((product) => (
        <ProductItem product={product} key={product.id.toString()} />
      ))}
    </div>
  );
};

export default ProductGrid;
