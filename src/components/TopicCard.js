import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopicCard = props => (
  <Link
    className="navbar-item button is-danger is-bold title is-4" 
    to={`/topics/${props.slug}/articles`}
  >
    {props.title}
  </Link>
);

TopicCard.defaultProps = {
  slug: '',
  title: ''
};

TopicCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TopicCard;
