import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers, fetchArticles } from '../actions/asyncActions';
import ArticleCard from './ArticleCard';

export class HomePage extends React.Component {
	componentDidMount() {
    this.props.fetchUsers();
		this.props.fetchArticles();
	}
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        { this.props.articles
          .sort((a, b) => b.votes - a.votes)
            .map((article) => {
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
          )
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
  fetchArticles: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
