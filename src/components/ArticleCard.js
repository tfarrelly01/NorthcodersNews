import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
const ArticleCard = (props) => (
  <div className='box'>
    <article className='media'>
      <div className='media-left'>
        <p>Upvotes:</p>
        {props.votes}
        <h3>comments:</h3>
        {props.comments}
        <div>
          <img src={props.avatarUrl} alt="User Avatar" />
        </div>
      </div>
      <div className='media-content'>
        <div className='content'>
          <Link to={`/articles/${props.id}/comments`} className="title is-4">{props.title}</Link>
          <h5 className='title is-5'>By: {props.createdBy}</h5>
        </div>
      </div>
    </article>
  </div>
);
*/
const ArticleCard = props => (
  <div className="box">
    <article className="columns">
      <span className="column is-2">
        <div>
          <img src={props.avatarUrl} alt="User Avatar" />
        </div>
        <section className="voteSection">
          <a className="is-danger is-small" onClick={props.articleVote.bind(null, props.id, 'up')} >
            <i className="fa fa-arrow-up row" />
          </a>
          <span className="row tag is-medium bold">{props.votes}</span>
          <a className="is-danger is-small" onClick={props.articleVote.bind(null, props.id, 'down')} >
            <i className="fa fa-arrow-down row" />
          </a>
        </section>
      </span>
      <div className="media-content">
        <div className="content">
          <Link to={`/articles/${props.id}/comments`} className="title is-3">{props.title}</Link>
        </div>
        <div>Created By: {props.createdBy}</div>
        <div>Comments: {props.comments}</div>
      </div>
    </article>
  </div>
);
/*
const ArticleCard = props => (
  <div className="box">
    <article className="columns">
      <span className="column is-2">
        <div>
          <img src={props.avatarUrl} alt="User Avatar" />
        </div>
        <section className="voteSection">
          <a className="is-danger is-small" onClick={props.articleVote.bind(null, props.id, 'up')} >
            <i className="fa fa-arrow-up row" />
          </a>
          <span className="row tag is-medium bold">{props.votes}</span>
          <a className="is-danger is-small" onClick={props.articleVote.bind(null, props.id, 'down')} >
            <i className="fa fa-arrow-down row" />
          </a>
        </section>
      </span>
      <div className="media-content">
        <div className="content">
          <Link to={`/article/${props.id}`} className="title is-3">{props.title}</Link>
        </div>
        <div>Created By: {props.createdBy}</div>
        <div>Comments: {props.comments}</div>
      </div>
    </article>
  </div>
);
*/

ArticleCard.defaultProps = {
  articleVote: function articleVote() {}
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  articleVote: PropTypes.func
};

export default ArticleCard;
