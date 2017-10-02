import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers, fetchTopicArticles } from '../actions/asyncActions';
import ArticleCard from './ArticleCard';

export class TopicArticles extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchTopicArticles(this.props.match.params.topic_slug);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.topic_slug !== nextProps.match.params.topic_slug) {
			this.props.fetchTopicArticles(nextProps.match.params.topic_slug);
		}
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
                title={article.title}
                createdBy={article.created_by}
                votes={article.votes}
                comments={article.comments}
                avatarUrl={userProfile.avatar_url}
              />
            );
          }
				)}
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
		fetchUsers: () => {
			dispatch(fetchUsers());
		},
		fetchTopicArticles: id => {
			dispatch(fetchTopicArticles(id));
		}
	};
}

TopicArticles.propTypes = {
	users: PropTypes.array.isRequired,
	articles: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	fetchTopicArticles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicArticles);
