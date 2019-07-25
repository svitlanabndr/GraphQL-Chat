import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries';

const MessageForm = props => {
  const [body, setBody] = useState('');

  const _updateStoreAfterAddingMessage = (store, newMessage) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy
      }
    });
    data.messages.messageList.unshift(newMessage);
    store.writeQuery({
      query: MESSAGE_QUERY,
      data
    });
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder="Enter your message here" value={body} onChange={e => setBody(e.target.value)} />
      </div>

      <Mutation
        mutation={POST_MESSAGE_MUTATION}
        variables={{ body }}
      >
        {postMutation =>
          <button className="post-button" onClick={postMutation}>Send</button>
        }
      </Mutation>
    </div>
  );
};

export default MessageForm;