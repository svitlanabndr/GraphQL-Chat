import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query messageQuery($orderBy: MessageOrderByInput) {
    messages(orderBy: $orderBy) {
      count
      messageList {
        id
        body
        likesCount
        dislikesCount
        replies {
          id
          body
        }
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation PostMutation($body: String!) {
    postMessage(body: $body) {
      id
      body
      likesCount
      dislikesCount
      replies {
        id
        body
      }
    }
  }
`;

export const POST_REPLY_MUTATION = gql`
  mutation PostMutation($messageId: ID!, $body: String!) {
    postReply(messageId: $messageId, body: $body) {
      id
      body
    }
  }
`;

export const UPDATE_LIKECOUNT_MUTATION = gql`
  mutation PostMutation($id: ID!) {
    updateLikeCount(id: $id) {
      id
      body
      likesCount
      dislikesCount
      replies {
        id
        body
      }
    }
  }
`;

export const UPDATE_DISLIKECOUNT_MUTATION = gql`
  mutation PostMutation($id: ID!) {
    updateDislikeCount(id: $id) {
      id
      body
      likesCount
      dislikesCount
      replies {
        id
        body
      }
    } 
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      id
      body
      likesCount
      dislikesCount
      replies {
        id
        body
      }
    }
  }
`;
