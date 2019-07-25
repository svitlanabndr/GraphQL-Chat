import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { MESSAGE_QUERY, POST_REPLY_MUTATION } from '../../queries';

const ReplyForm = props => {
  const { messageId, toggleForm } = props;
  const [body, setBody] = useState('');

  const checkInput = postMutation => {
    if (body.trim().length > 0) postMutation(body);
  }

  const _updateStoreAfterAddingReply = (store, newReply, messageId) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy,
        filter: '', 
        offset: 0, 
        limit: 5
      }
    });
    const repliedMessage = data.messages.messageList.find(
      item => item.id === messageId
    );
    repliedMessage.replies.push(newReply);
    store.writeQuery({ query: MESSAGE_QUERY, data });
    toggleForm(false);
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <textarea
          onChange={e => setBody(e.target.value)}
          placeholder="Reply..."
          autoFocus
          value={body}
          cols="25"
        />
      </div>
      <Mutation
        mutation={POST_REPLY_MUTATION}
        variables={{ messageId, body }}
        update={(store, { data: { postReply } }) => {
          _updateStoreAfterAddingReply(store, postReply, messageId)
        }}
      >
        {postMutation =>
          <button className='send-btn' onClick={() => checkInput(postMutation)}>Reply</button>
        }
      </Mutation>
    </div>
  );
};

export default ReplyForm;