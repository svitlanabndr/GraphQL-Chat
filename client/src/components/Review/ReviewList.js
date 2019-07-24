import React, { useState } from 'react';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';

const ReviewList = props => {
    const [showReviewForm, toggleForm] = useState(false);
    const { productId, reviews } = props;
    
    return (
        <div className="review-list">
            {reviews.length > 0 && <span className="review-list-title">Reviews</span>}
            {reviews.map(item => {
                return <ReviewItem key={item.id} {...item} />
            })}
            <button className="review-button" onClick={() => toggleForm(!showReviewForm)}>
                {showReviewForm ? 'Close review' : 'Add review'}
            </button>
            {showReviewForm && <ReviewForm
                productId={productId}
                toggleForm={toggleForm}
            />}
        </div>
    );
}

export default ReviewList;
