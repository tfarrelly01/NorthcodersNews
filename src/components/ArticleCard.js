import React from 'react';
import PropTypes from 'prop-types';
// import 'bulma/css/bulma.css';

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
          <h3 className='title is-4'>{props.title}</h3>
          <h5 className='title is-5'>By: {props.createdBy}</h5>
        </div>
      </div>
    </article>
  </div>
);


ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default ArticleCard;