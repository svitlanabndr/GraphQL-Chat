import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
  query productQuery($orderBy: ProductOrderByInput) {
    products(orderBy: $orderBy) {
      count
      productList {
        id
        title
        price
        reviews {
          id
          text
        }
      }
    }
  }
`;

export const POST_PRODUCT_MUTATION = gql`
  mutation PostMutation($title: String!, $price: Float!) {
    postProduct(title: $title, price: $price) {
      id
      title
      price
      reviews {
        id
        text
      }
    }
  }
`;

export const POST_REVIEW_MUTATION = gql`
  mutation PostMutation($productId: ID!, $text: String!) {
    postReview(productId: $productId, text: $text) {
      id
      text
    }
  }
`;

export const NEW_PRODUCTS_SUBSCRIPTION = gql`
  subscription {
    newProduct {
      id
      title
      price
      reviews {
        id
        text
      }
    }
  }
`;

export const NEW_REVIEWS_SUBSCRIPTION = gql`
  subscription {
    newReview {
      id
      text
    }
  }
`;
