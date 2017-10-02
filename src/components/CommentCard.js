import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = (props) => {
    return (
      <section className="box">
        <div className="columns">

          <div className="column is-2">
            <div>
              <img src={props.avatarUrl} alt="User Avatar" />
            </div>

          </div>

          <div className="column is-8">
            <section className="">
              <p className="comment-body">{props.body}</p>
            </section>
          </div>
        </div>

      </section>
    );
}

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};


export default CommentCard;