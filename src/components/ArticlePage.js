import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/asyncActions';

import CommentCard from './CommentCard';
import AddCommentForm from './AddCommentForm';

export class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentTextInput: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    console.log('ArticlePage - this.props:', this.props);
    const articleId = this.props.match.params.article_id;
    this.props.fetchUsers();
    this.props.fetchArticle(articleId);
    this.props.fetchArticleComments(articleId);
  }

  inputHandler(e) {
    this.setState({
      commentTextInput: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addComment(this.props.match.params.article_id, this.state.commentTextInput);
    this.setState({ commentTextInput: '' });
  }

  render() {
    return (
      <section className="container box">
        <div className="columns">

          <div className="column is-8">
            <section className="box">
              <h1 className="title"><b>{this.props.article.title}</b></h1>
              <h6 className="subtitle">Created by: {this.props.article.created_by}</h6>
              <p className="">{this.props.article.body}</p>
            </section>

            <section className="box">
              <AddCommentForm
                inputHandler={this.inputHandler}
                submitHandler={this.submitHandler}
                input={this.state.commentTextInput}
              />

              <section className="box comment">
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
                  })}
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    article: state.article,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    },
    fetchArticle: (id) => {
      dispatch(actions.fetchArticle(id));
    },
    fetchArticleComments: (id) => {
      dispatch(actions.fetchArticleComments(id));
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
  addComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);