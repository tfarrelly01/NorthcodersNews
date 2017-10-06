import React from 'react';
import PropTypes from 'prop-types';

const VoteUpOrDown = props => (
  <figure className="media-left">
    <p className="image is-96x96">
      <img src={props.avatarUrl} alt="User Avatar" />
    </p>
    <section className="level-item has-text-centered ">
      <a 
        className="is-danger is-small row has-text-info" 
        onClick={props.commentVote.bind(null, props.id, 'up')}
      >
        <i className="fa fa-thumbs-up fa-2x" />
      </a>
      <span className="row tag is-medium bold">{props.votes}</span>
      <a 
        className="is-danger is-small row has-text-info" 
        onClick={props.commentVote.bind(null, props.id, 'down')}
      >
        <i className="fa fa-thumbs-down fa-2x" />
      </a>
    </section>
  </figure>
);

VoteUpOrDown.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
	commentVote: PropTypes.func.isRequired
};

export default VoteUpOrDown;