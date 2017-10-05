import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { commentVote, deleteComment } from '../actions/asyncActions';
import CommentCard from './CommentCard';

export class CommentList extends React.Component {

  componentDidMount() {
    console.log('CommentList:componentDidMount-this.props', this.props);
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
                commentVote={this.props.commentVote}
                deleteComment={this.props.deleteComment}
              />
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    article: state.article,
    comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentVote: (commentId, voteUpOrDown) => {
      dispatch(commentVote(commentId, voteUpOrDown));
    },
    deleteComment: (commentId) => {
      dispatch(deleteComment(commentId));
    }
  };
}

CommentList.propTypes = {
	users: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired,
  commentVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
