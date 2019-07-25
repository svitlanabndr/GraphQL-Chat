import React from 'react';
import ReplyList from '../Reply/ReplyList';
import { ReactComponent as LogoLike } from './like.svg';
import { ReactComponent as LogoDislike } from './dislike.svg';
import { Mutation } from 'react-apollo';
import { UPDATE_LIKECOUNT_MUTATION, UPDATE_DISLIKECOUNT_MUTATION } from '../../queries';

const MessageItem = props => {
  const { id, body, likesCount, dislikesCount, replies } = props;

  return (
    <div className="message-item">
      <div className="body-wrapper">
        <h2>{body} <span className='id'>#{id.substr(id.length - 3)}</span></h2>
        <div className='reaction'>
          <span>{likesCount} </span>
          <Mutation
            mutation={UPDATE_LIKECOUNT_MUTATION}
            variables={{ id }}
          >
            {postMutation =>
              <button onClick={postMutation}><LogoLike/></button>
            }
          </Mutation>
          <Mutation
            mutation={UPDATE_DISLIKECOUNT_MUTATION}
            variables={{ id }}
          >
            {postMutation =>
              <button onClick={postMutation}><LogoDislike/></button>
            }
          </Mutation>
          <span> {dislikesCount}</span>
        </div>
      </div>
      <ReplyList messageId={id} replies={replies} orderBy={props.orderBy}/>
    </div>
  );
};

export default MessageItem;
