import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers, fetchArticles } from '../actions/asyncActions';
import ArticleList from './ArticleList';

export class HomePage extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchArticles();
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
		fetchArticles: () => {
			dispatch(fetchArticles());
		}
	};
}

HomePage.propTypes = {
	users: PropTypes.array.isRequired,
	articles: PropTypes.array.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	fetchArticles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
