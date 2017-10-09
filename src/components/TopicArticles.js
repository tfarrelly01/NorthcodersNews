import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers, fetchTopicArticles } from '../actions/asyncActions';
import ArticleList from './ArticleList';

class TopicArticles extends React.Component {
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
      <ArticleList
        articles={this.props.articles} 
        users={this.props.users}
      />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		articles: state.articles
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		fetchUsers: () => {
			dispatch(fetchUsers());
		}, 
		fetchTopicArticles: (id) => {
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
