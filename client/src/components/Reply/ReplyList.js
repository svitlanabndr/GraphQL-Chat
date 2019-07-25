import React, { useState } from 'react';
import ReplyItem from './ReplyItem';
import ReplyForm from './ReplyForm';

const ReplyList = props => {
    const [showReplyForm, toggleForm] = useState(false);
    const { messageId, replies } = props;
    
    return (
        <div className="review-list">
            {replies.length > 0 && <span className="review-list-title">Replies</span>}
            {replies.map(item => {
                return <ReplyItem key={item.id} {...item} />
            })}
            <button className="review-button" onClick={() => toggleForm(!showReplyForm)}>
                {showReplyForm ? 'Close reply' : 'Add reply'}
            </button>
            {showReplyForm && <ReplyForm
                messageId={messageId}
                toggleForm={toggleForm}
            />}
        </div>
    );
}

export default ReplyList;
