import React from 'react';
import PropTypes from 'prop-types';

export const AddCommentForm = props => (
  <div className="media">
    <form className="media-content" onSubmit={props.submitHandler}>
      <div className="field">
        <p className="control">
          <textarea
            className="textarea"
            placeholder="Post your comment"
            value={props.input}
            onChange={props.inputHandler}
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

AddCommentForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default AddCommentForm;
