import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

// function ProductGrid({ children }) {
//   return <div className="product-grid">{children}</div>;
// }

function ProductGrid(props) {
  const { products } = props;
  const productKeys = Object.keys(products);
  return (
    <div className="product-grid">
      {productKeys.map((key) => {
        return <ProductCard key={key} product={products[key]} />;
      })}
    </div>
  );
}

export default ProductGrid;
