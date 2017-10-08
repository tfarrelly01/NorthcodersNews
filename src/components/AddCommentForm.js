import React from 'react';
import PropTypes from 'prop-types';

const AddCommentForm = props => (
  <div className="media">
    <form className="media-content" onSubmit={props.handleSubmit}>
      <div className="field">
        <p className="control">
          <textarea
            className="textarea"
            placeholder="Post your comment"
            value={props.commentText}
            onChange={props.handleInput}
          />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button
            className="button is-info"
            type="submit"
            value="post"
          >
          Post comment
          </button>
        </p>
      </div>
    </form>
  </div>
);


AddCommentForm.defaultProps = {
  handleSubmit: () => {},
  handleInput: () => {},
  commentText: ''
};

AddCommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
};

export default AddCommentForm;