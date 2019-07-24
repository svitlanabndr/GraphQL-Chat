import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_PRODUCT_MUTATION, PRODUCT_QUERY } from '../../queries';

const ProductForm = props => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const _updateStoreAfterAddingProduct = (store, newProduct) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: PRODUCT_QUERY,
      variables: {
        orderBy
      }
    });
    data.products.productList.unshift(newProduct);
    store.writeQuery({
      query: PRODUCT_QUERY,
      data,
    });
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      </div>

      <Mutation
        mutation={POST_PRODUCT_MUTATION}
        variables={{ title, price: parseFloat(price) }}
        update={(store, { data: { postProduct } }) => {
          _updateStoreAfterAddingProduct(store, postProduct);
        }}
        onCompleted={() => props.history.push('/')}
      >
        {postMutation =>
          <button className="post-button" onClick={postMutation}>Add</button>
        }
      </Mutation>
    </div>
  );
};

export default ProductForm;