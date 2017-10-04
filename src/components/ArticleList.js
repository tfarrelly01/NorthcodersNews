import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articleVote } from '../actions/asyncActions';
import ArticleCard from './ArticleCard';

export class ArticleList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount-this.props', this.props);
  }
	render() {
    return (
      <div>
        {this.props.articles.sort((a, b) => b.votes - a.votes)
          .map(article => {
            let userProfile = this.props.users.find(user => user.username === article.created_by);
            return (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                createdBy={article.created_by}
                votes={article.votes}
                comments={article.comments}
                name={userProfile.name}
                avatarUrl={userProfile.avatar_url}
                articleVote={this.props.articleVote}
              />
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		users: state.users,
		articles: state.articles
	};
}

function mapDispatchToProps(dispatch) {
	return {
    articleVote: (articleId, vote) => {
			dispatch(articleVote(articleId, vote));
		}
	};
}


ArticleList.propTypes = {
	users: PropTypes.array.isRequired,
	articles: PropTypes.array.isRequired,
  articleVote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
