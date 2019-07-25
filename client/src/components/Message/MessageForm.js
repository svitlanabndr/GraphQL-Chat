import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries';

const MessageForm = props => {
  const [body, setBody] = useState('');

  const checkInput = postMutation => {
    if (body.trim().length > 0) postMutation(body);
  }

  return (
    <div className="message-item top">
      <div className="body-wrapper">

        <input type="text" placeholder="Enter your message here..." value={body} onChange={e => setBody(e.target.value)} />
        <Mutation
          mutation={POST_MESSAGE_MUTATION}
          variables={{ body }}
          onCompleted={ () => setBody('')} 
        >
          {postMutation =>
            <button className='send-btn' onClick={() => checkInput(postMutation)}>Send</button>
          }
        </Mutation>
      </div>
    </div>
  );
};

export default MessageForm;