import React from "react";

// <i class="fas fa-star"></i> full star
// <i class="far fa-star"></i> empty star
// <i class="fas fa-star-half-alt"></i> half star

function StarRating(props) {
  const { rating } = props;
  let ratingJSX = [];

  for (let i = 1; i <= 5; i++) {
    ratingJSX.push(
      i <= rating ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>
    );
  }
  return <div>{ratingJSX}</div>;
}

export default StarRating;
