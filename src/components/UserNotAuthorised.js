import React from 'react';
import PropTypes from 'prop-types';

const UserNotAuthorised = (props) => {
  if (!props.displayMessage) {
    return null;
  }
  return (
    <article className="message is-danger">
      <div className="message-header">
        <p><strong>Unable to delete!</strong></p>
        <button className="delete" aria-label="delete" onClick={props.onClose} />
      </div>
      <div className="message-body">
        <p>You are only allowed to delete comments made by yourself</p>
      </div>
    </article>
  );
};

UserNotAuthorised.defaultProps = {
  displayMessage: false,
  onClose: () => {}
};

UserNotAuthorised.propTypes = {
  displayMessage: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserNotAuthorised;
