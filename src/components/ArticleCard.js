import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articleVote } from '../actions/asyncActions';
import VoteUpOrDown from './VoteUpOrDown';

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
  }

  handleVoteUp() {
    this.props.articleVote(this.props.id, 'up');
  }

  handleVoteDown() {
    this.props.articleVote(this.props.id, 'down');
  }
  
  render () {
    return (
      <div className="box">
        <article className="columns">
          <span className="column is-2">
            <VoteUpOrDown 
              id={this.props.id}
              votes={this.props.votes}
              avatarUrl={this.props.avatarUrl}
              handleVoteUp={this.handleVoteUp}
              handleVoteDown={this.handleVoteDown}
            />
          </span>

          <div className="media-content">
            <div className="content">
              <Link to={`/articles/${this.props.id}/comments`} className="title is-3">{this.props.title}</Link>
            </div>
            <div>Created By: {this.props.createdBy}</div>
            <div>Comments: {this.props.comments}</div>
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    articles:state.articles
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    articleVote: (articleId, vote) => {
      dispatch(articleVote(articleId, vote));
    }
  };
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  articleVote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard);
