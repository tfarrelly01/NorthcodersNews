import React from 'react';
import PropTypes from 'prop-types';

const VoteUpOrDown = props => (
  <figure>
    <p className="image is-96x96 has-text-centered">
      <img src={props.avatarUrl} alt="User Avatar" />
    </p>
    <section className="level-item has-text-centered ">
      <a 
        className="is-danger is-small row has-text-success" 
        onClick={props.handleVoteUp}
      >
        <i className="fa fa-thumbs-o-up fa-2x" />
      </a>
      <span className="row tag is-medium bold">{props.votes}</span>
      <a 
        className="is-danger is-small row has-text-danger" 
        onClick={props.handleVoteDown}
      >
        <i className="fa fa-thumbs-o-down fa-2x" />
      </a>
    </section>
  </figure>
);

VoteUpOrDown.defaultProps = {
  avatarUrl: '',
  votes: 0,
  handleVoteUp: () => {},
  handleVoteDown: () => {}
};

VoteUpOrDown.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
	handleVoteUp: PropTypes.func.isRequired,
  handleVoteDown: PropTypes.func.isRequired
};

export default VoteUpOrDown;