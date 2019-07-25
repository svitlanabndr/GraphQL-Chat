import React from 'react';

const ReplyItem = props => {
    const { body, id } = props;
    return (
        <p className="reply">{body} <span className='id'>#{id.substr(id.length - 3)}</span></p>
    );
};

export default ReplyItem;