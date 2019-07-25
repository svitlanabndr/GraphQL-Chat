import React from 'react';
import ReplyList from '../Reply/ReplyList';

const MessageItem = props => {
  const { id, body, likesCount, dislikesCount, replies } = props;
  
  return (
    <div className="product-item">
      <div className="title-wrapper">
        <h2>{body}</h2>
        <span>{likesCount} likes</span>
        <span>{dislikesCount} dislikes</span>
      </div>
      <ReplyList messageId={id} replies={replies} />
    </div>
  );
};

export default MessageItem;
