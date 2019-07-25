import React from 'react';

const ReplyItem = props => {
    const { body } = props;
    return (
        <p>{body}</p>
    );
};

export default ReplyItem;