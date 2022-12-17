import products from "../../data/products";
import ProductItem from "./ProductItem";
import "./ProductGrid.scss";

const ProductGrid = () => {
  return (
    <div className="maim__product_wrapper">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
