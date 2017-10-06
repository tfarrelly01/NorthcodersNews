import React from 'react';
import PropTypes from 'prop-types';

const DeleteComment = props => (
  <div className="media-right">
    <a className="btn btn-danger has-text-danger" aria-label="Delete" onClick={props.handleDelete}>
      <i className="fa fa-trash-o fa-2x" aria-hidden="true" />
    </a>
  </div>
);

DeleteComment.defaultProps = {
  handleDelete: () => {}
};

DeleteComment.propTypes = {
	handleDelete: PropTypes.func.isRequired
};

export default DeleteComment;
