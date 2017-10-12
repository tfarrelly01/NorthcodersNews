import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
//  fetchUser,
  articleVote, 
  addComment, 
  commentVote, 
  deleteComment } from '../actions/asyncActions';
import CommentCard from './CommentCard';
import AddCommentForm from './AddCommentForm';
import VoteUpOrDown from './VoteUpOrDown';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
  }

/*
  componentDidMount() {
    this.props.fetchUser(this.props.article.created_by);
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.article.created_by !== nextProps.article.created_by)
        this.props.fetchUser(nextProps.article.created_by);
	}
*/

  handleInput(e) {
    this.setState({
      commentText: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.props.article._id, this.state.commentText);
    this.setState({ commentText: '' });
  }

  handleVoteUp() {
    this.props.articleVote(this.props.article._id, 'up');
  }

  handleVoteDown() {
    this.props.articleVote(this.props.article._id, 'down');
  }
  
  render () {
    return (
      <div className="container">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <span>
                <VoteUpOrDown 
                  id={this.props.article._id}
                  votes={this.props.article.votes}
                  avatarUrl={this.props.user.avatar_url}
                  handleVoteUp={this.handleVoteUp}
                  handleVoteDown={this.handleVoteDown}
                />
              </span>
            </div>

            <section>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-3"><b>{this.props.article.title}</b></h1>
                </div>
                <h5 className="subtitle is-5">
                  Created by <strong>{this.props.user.name}</strong> ({this.props.article.created_by})
                </h5>
                <div className="content is-medium">
                  <p>{this.props.article.body}</p>
                </div>
              </div>
            </section>
          </article>
        </div>

        <section className="box">
          <AddCommentForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            commentText={this.state.commentText}
          />
        </section>

        <section>
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
                  name={userProfile.name}
                  commentVote={this.props.commentVote}
                  deleteComment={this.props.deleteComment}
                />
              );
            })
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    article: state.article,
    comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
 //   fetchUser: (username) => {
 //     dispatch(fetchUser(username));
 //   },
    articleVote: (articleId, vote) => {
      dispatch(articleVote(articleId, vote));
    },
    addComment: (articleId, comment) => {
      dispatch(addComment(articleId, comment));
    },
    commentVote: (commentId, voteUpOrDown) => {
      dispatch(commentVote(commentId, voteUpOrDown));
    },
    deleteComment: (commentId) => {
      dispatch(deleteComment(commentId));
    },
  };
}

CommentList.propTypes = {
  users: PropTypes.array.isRequired,
  article: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired,
//  fetchUser: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  commentVote: PropTypes.func.isRequired, 
  deleteComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
