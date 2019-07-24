import React from 'react';

const ReviewItem = props => {
    const { text } = props;
    return (
        <p>{text}</p>
    );
};

export default ReviewItem;