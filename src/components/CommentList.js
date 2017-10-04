import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

export class CommentList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount-this.props', this.props);
  }
	render() {
    return (
      <div className="comment">
        {this.props.comments.sort((a, b) => b.votes - a.votes)
          .map(comment => {
            let userProfile = this.props.users.find(user => user.username === comment.created_by);
            return (
              <CommentCard
                key={comment._id}
                id={comment._id}
                body={comment.body}
                createdBy={comment.created_by}
                votes={comment.votes}
                createdAt={comment.created_at}
                avatarUrl={userProfile.avatar_url}
              />
            );
          })
        }
      </div>
    );
  }
}

CommentList.propTypes = {
	users: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired
};

export default CommentList;
