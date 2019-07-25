import React, { useState } from 'react';
import Select from 'react-select';
import { Query } from 'react-apollo';
import MessageItem from './MessageItem';
import { MESSAGE_QUERY, NEW_MESSAGES_SUBSCRIPTION, NEW_REACTIONS_SUBSCRIPTION } from '../../queries';
import MessageForm from './MessageForm';

const MessageList = props => {
  const options = [
    { value: 'createdAt_DESC', label: 'sorting by creation date descending' },
    { value: 'createdAt_ASC', label: 'sorting by creation date ascending' },
    { value: 'likesCount_DESC', label: 'sorting by likes descending' },
    { value: 'likesCount_ASC', label: 'sorting by likes ascending' },
    { value: 'dislikesCount_DESC', label: 'sorting by dislikes descending' },
    { value: 'dislikesCount_ASC', label: 'sorting by dislikes ascending' },
  ];
  let i = 0;
  const [orderBy, setOrderBy] = useState(options[0]);
  const [filter, setFilter] = useState('');

  const _subscribeToNewMessages = subscribeToMore => {
    subscribeToMore({
      document: NEW_MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newMessage } = subscriptionData.data;
        const exists = prev.messages.messageList.find(({ id }) => id === newMessage.id);
        if (exists) return prev;

        return {...prev, messages: {
          messageList: [newMessage, ...prev.messages.messageList],
          count: prev.messages.messageList.length + 1,
          __typename: prev.messages.__typename
        }};
      }
    });
  };

  const _subscribeToNewReactions = subscribeToMore => {
    subscribeToMore({
      document: NEW_REACTIONS_SUBSCRIPTION
    });
  };

  const onLoadMore = (fetchMore, messageList) => {
    fetchMore({
      variables: {
        offset: messageList.length + i
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const result = Object.assign({}, prev, {
          messages: {...prev.messages, ...{ messageList: [...prev.messages.messageList, ...fetchMoreResult.messages.messageList] }}
        });
        i += messageList.length;
        return result;
      }
    });
  }

  return (
    <div className='message-list'>
      <Select
        value={orderBy}
        onChange={setOrderBy}
        options={options}
      />
      <div>
        <input
          className='filter'
          type='text' 
          placeholder='Search by keywords...'
          value={filter} 
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <MessageForm/>
      <Query 
        query={MESSAGE_QUERY} 
        variables={{ orderBy: orderBy.value, filter, offset: 0,
          limit: 5 }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, subscribeToMore, fetchMore }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Fetch error</div>;

          _subscribeToNewMessages(subscribeToMore);
          _subscribeToNewReactions(subscribeToMore);
          
          const { messages: { messageList } } = data;

          return (
            <div>
              {messageList.map(item => {
                return <MessageItem key={item.id} {...item} />
              })}
              <div className='load-more'><button onClick={() => {onLoadMore(fetchMore, messageList)}}>more...</button></div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default MessageList;
