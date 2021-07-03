import React from "react";
import StarRating from "./StarRating";
import "./ProductCard.css";

function ProductCard(props) {
  const { title, images } = props.product;
  console.log(title);
  const { price, rating, brand } = props.product.parameters;
  return (
    <div className="wrapper">
      <div className="product-card">
        <div className="product-image">
          <img src={images.base + images.card.path} alt="description" />
        </div>
        <div className="product-parameters">
          <div className="title">{title}</div>
          <div className="price">$ {price}</div>
          <div className="rating">
            {rating} <StarRating rating={rating} />
          </div>
          <div className="brand">{brand}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
