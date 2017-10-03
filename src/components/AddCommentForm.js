import React from 'react';
import PropTypes from 'prop-types';

export const AddCommentForm = props => (
  <div>
    <form className="media-content" onSubmit={props.submitHandler}>
      <textarea
        className="textarea"
        placeholder="Post comment"
        value={props.input}
        onChange={props.inputHandler}
      />
      <button
        className="button is-info"
        type="submit"
        value="post"
      >
      Post comment
      </button>
    </form>
  </div>
);

AddCommentForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default AddCommentForm;