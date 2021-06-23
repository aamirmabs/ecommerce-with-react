import React from "react";
import "./ProductCard.css";

// Keyboard layouts

// code: 40
// text: 40%

// code: 50
// text: 50%

// code: 60
// text: 60%

// code: 65
// text: 65%

// code: tkl
// text: Tenkeyless (TKL)

// code: full
// text: Full Size (100%)

// code: ergo
// text: Split & Ergonomic

// code: diy
// text: DIY Keyboard Kits

function ProductCard(props) {
  const { title, images } = props.product;
  const { price, rating, brand } = props.product.parameters;
  console.log(props);
  console.log(props[title]);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={images.base + images.card.path} alt="description" />
      </div>
      <div className="product-parameters">
        <div className="title">{title}</div>
        <div className="price">$ {price}</div>
        <div className="rating">{rating}</div>
        <div className="brand">{brand}</div>
      </div>
    </div>
  );
}

export default ProductCard;
