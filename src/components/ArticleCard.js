import React from 'react';
import PropTypes from 'prop-types';
// import 'bulma/css/bulma.css';

const ArticleCard = (props) => (
  <div className='box'>
    <article className='media'>
      <div className='media-left'>
        <p>Upvotes:</p>
        {props.votes}
        <h3>comments</h3>
        {props.comments}
      </div>
      <div className='media-content'>
        <div className='content'>
          <h3 className='title is-3'>{props.title}</h3>
        </div>
      </div>
    </article>
  </div>
);


ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired
};

export default ArticleCard;