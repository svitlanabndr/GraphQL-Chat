import React from 'react';
import ReviewList from '../Review/ReviewList';

const ProductItem = props => {
  const { id, title, price, reviews } = props;
  
  return (
    <div className="product-item">
      <div className="title-wrapper">
        <h2>{title}</h2>
        <span>{price} ₴</span>
      </div>
      <ReviewList productId={id} reviews={reviews} />
    </div>
  );
};

export default ProductItem;
