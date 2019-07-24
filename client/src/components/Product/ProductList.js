import React from 'react';
import { Query } from 'react-apollo';
import ProductItem from '../Product/ProductItem';
import { PRODUCT_QUERY, NEW_PRODUCTS_SUBSCRIPTION } from '../../queries';

const ProductList = props => {
  const orderBy = 'createdAt_DESC';

  const _subscribeToNewProducts = subscribeToMore => {
    subscribeToMore({
      document: NEW_PRODUCTS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newProduct } = subscriptionData.data;
        const exists = prev.products.productList.find(({ id }) => id === newProduct.id);
        if (exists) return prev;

        return {...prev, products: {
          productList: [newProduct, ...prev.products.productList],
          count: prev.products.productList.length + 1,
          __typename: prev.products.__typename
        }};
      }
    });
  };

  return (
    <Query query={PRODUCT_QUERY} variables={{ orderBy }}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Fetch error</div>;
        _subscribeToNewProducts(subscribeToMore);

        const { products: { productList } } = data;

        return (
          <div className="product-list">
            {productList.map(item => {
              return <ProductItem key={item.id} {...item} />
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default ProductList;
