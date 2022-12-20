import ProductItem from "./ProductItem";
import "./ProductGrid.scss";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { ProductGridType } from "../../types";

const ProductGrid: FunctionComponent<ProductGridType> = ({
  view,
  products,
}: ProductGridType) => (
  <div
    className={classNames("main__product_wrapper", {
      line: view === "line",
    })}
  >
    {products.map((product) => (
      <ProductItem product={product} key={product.id.toString()} />
    ))}
  </div>
);

export default ProductGrid;
