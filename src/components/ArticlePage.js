import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/asyncActions';

import CommentList from './CommentList';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    this.props.fetchUsers();
    this.props.fetchArticleAndUser(articleId);  
//    this.props.fetchArticle(articleId);
    this.props.fetchArticleComments(articleId);
  }
  
  render() {
    return (
      <div>
        <CommentList 
          article={this.props.article}
          comments={this.props.comments} 
          users={this.props.users}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    article: state.article,
    user: state.user,
    comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
   },
  fetchArticleAndUser: (articleId) => {
    dispatch(actions.fetchArticleAndUser(articleId));
  },
//    fetchArticle: (articleId) => {
//      dispatch(actions.fetchArticle(articleId));
//    },
    fetchArticleComments: (articleId) => {
      dispatch(actions.fetchArticleComments(articleId));
    }
  };
}

ArticlePage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchArticleAndUser: PropTypes.func.isRequired,
  //  fetchArticle: PropTypes.func.isRequired,
  fetchArticleComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);