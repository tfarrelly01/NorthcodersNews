import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticles, fetchUsers } from '../actions/asyncActions';
import ArticleCard from './ArticleCard';

export class HomePage extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
    this.props.fetchUsers();
	}
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        { this.props.articles
          .sort((a, b) => b.votes - a.votes)
            .map((article) => {
              let userProfile = this.props.users.find(user => user.username === article.created_by);
   //          console.log('userProfile', userProfile);
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
		articles: state.articles,
    users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchArticles: () => {
			dispatch(fetchArticles());
		},
    fetchUsers: () => {
			dispatch(fetchUsers());
		},
	};
}

HomePage.propTypes = {
	articles: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
	fetchArticles: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
