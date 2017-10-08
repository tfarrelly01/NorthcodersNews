import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticleList = props => (
  <div>
    {props.articles.sort((a, b) => b.votes - a.votes)
      .map(article => {
        let userProfile = props.users.find(user => user.username === article.created_by);
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
          />
        );
      })
    }
  </div>
);

ArticleList.defaultProps = {
  users: [],
  articles: []
};

ArticleList.propTypes = {
	users: PropTypes.array.isRequired,
	articles: PropTypes.array.isRequired
};

export default ArticleList;
