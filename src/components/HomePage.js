import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticles } from '../actions/asyncActions';
import ArticleCard from './ArticleCard';

export class HomePage extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
	}
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        { this.props.articles
            .map(article => (
              <ArticleCard
                key={article._id}
                title={article.title}
                votes={article.votes}
                comments={article.comments}
              />
            )
          )
        }
      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchArticles: () => {
			dispatch(fetchArticles());
		}
	};
}

HomePage.propTypes = {
	articles: PropTypes.array.isRequired,
	fetchArticles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
