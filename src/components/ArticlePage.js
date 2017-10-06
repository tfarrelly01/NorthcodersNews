import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/asyncActions';

import CommentList from './CommentList';
import AddCommentForm from './AddCommentForm';
import VoteUpOrDown from './VoteUpOrDown';

export class ArticlePage extends React.Component {
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

  componentDidMount() {
    console.log('ArticlePage - this.props:', this.props);
    const articleId = this.props.match.params.article_id;
    this.props.fetchUsers();
    this.props.fetchArticle(articleId);
    this.props.fetchArticleComments(articleId);
  }

  handleInput(e) {
    this.setState({
      commentText: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.props.match.params.article_id, this.state.commentText);
    this.setState({ commentText: '' });
  }

  handleVoteUp() {
    this.props.articleVote(this.props.article._id, 'up');
  }

  handleVoteDown() {
    this.props.articleVote(this.props.article._id, 'down');
  }

  render() {
    return (
      <section className="container box">
        <div className="columns">

          <div className="column is-2">
            <VoteUpOrDown 
              id={this.props.article._id}
              avatarUrl={this.props.users.avatarUrl}
              votes={this.props.article.votes}
              handleVoteUp={this.handleVoteUp}
              handleVoteDown={this.handleVoteDown}
            />
          </div>

          <div className="column is-8">
            <section className="box">
              <h1 className="title"><b>{this.props.article.title}</b></h1>
              <h6 className="subtitle">Created by: {this.props.article.created_by}</h6>
              <p className="">{this.props.article.body}</p>
            </section>

            <section className="box">
              <AddCommentForm
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                commentText={this.state.commentText}
              />

              <section className="box comment">
                <CommentList 
                  comments={this.props.comments} 
                  users={this.props.users} 
                />
              </section>

            </section>
          </div>
        </div>
      </section>
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
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
    fetchArticle: (articleId) => {
      dispatch(actions.fetchArticle(articleId));
    },
    fetchArticleComments: (articleId) => {
      dispatch(actions.fetchArticleComments(articleId));
    },
    articleVote: (articleId, vote) => {
      dispatch(actions.articleVote(articleId, vote));
    },
    addComment: (articleId, comment) => {
      dispatch(actions.addComment(articleId, comment));
    }
  };
}

ArticlePage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchArticle: PropTypes.func.isRequired,
  fetchArticleComments: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);