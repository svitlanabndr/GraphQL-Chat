import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { PRODUCT_QUERY, POST_REVIEW_MUTATION } from '../../queries';

const ReviewForm = props => {
  const { productId, toggleForm } = props;
  const [text, setText] = useState('');

  const _updateStoreAfterAddingReview = (store, newReview, productId) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: PRODUCT_QUERY,
      variables: {
        orderBy
      }
    });
    const reviewedProduct = data.products.productList.find(
      item => item.id === productId
    );
    reviewedProduct.reviews.push(newReview);
    store.writeQuery({ query: PRODUCT_QUERY, data });
    toggleForm(false);
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <textarea
          onChange={e => setText(e.target.value)}
          placeholder="Review text"
          autoFocus
          value={text}
          cols="25"
        />
      </div>
      <Mutation
        mutation={POST_REVIEW_MUTATION}
        variables={{ productId, text }}
        update={(store, { data: { postReview } }) => {
          _updateStoreAfterAddingReview(store, postReview, productId)
        }}
      >
        {postMutation =>
          <button onClick={postMutation}>Post</button>
        }
      </Mutation>
    </div>
  );
};

export default ReviewForm;