import React from 'react';

const ReplyItem = props => {
    const { body } = props;
    return (
        <p className="reply">{body}</p>
    );
};

export default ReplyItem;