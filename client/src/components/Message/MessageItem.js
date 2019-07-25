import React from 'react';
import ReplyList from '../Reply/ReplyList';

const MessageItem = props => {
  const { id, body, likesCount, dislikesCount, replies } = props;
  
  return (
    <div className="message-item">
      <div className="body-wrapper">
        <h2>{body}</h2>
        <div className='reaction'>
          <span>{likesCount} likes</span>
          <span>{dislikesCount} dislikes</span>
        </div>
      </div>
      <ReplyList messageId={id} replies={replies} />
    </div>
  );
};

export default MessageItem;
