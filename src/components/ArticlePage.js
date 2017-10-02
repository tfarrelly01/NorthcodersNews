import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/asyncActions';

import CommentPage from './CommentCard';

export class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this.props:', this.props);
    const articleId = this.props.match.params.article_id;
    this.props.fetchUsers();
    this.props.fetchArticle(articleId);
    this.props.fetchArticleComments(articleId);
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

            <section className="box comment">
              <div className="comment">
                {this.props.comments.sort((a, b) => b.votes - a.votes)
                  .map(comment => {
                    let userProfile = this.props.users.find(user => user.username === comment.created_by);
                    return (
                      <CommentPage
                        key={comment._id}
                        id={comment._id}
                        body={comment.body}
                        createdBy={comment.created_by}
                        votes={comment.votes}
                        createdAt={comment.created_at}
                        name={userProfile.name}
                        avatarUrl={userProfile.avatar_url}
                      />
                    );
                  })}
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
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
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
    article: state.article,
    comments: state.comments
  };
}

ArticlePage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchArticle: PropTypes.func.isRequired,
  fetchArticleComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);