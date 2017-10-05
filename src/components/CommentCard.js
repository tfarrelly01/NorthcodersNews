import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = (props) => {
    return (
      <div className="box media">
        <figure className="media-left">
          <p className="image is-96x96">
            <img src={props.avatarUrl} alt="User Avatar" />
          </p>
                  <section className="voteSection level-item has-text-centered">
          <a className="is-danger is-small row"  >
            <i className="fa fa-thumbs-up fa-2x" />
          </a>
          <span className="row tag is-medium bold">{props.votes}</span>
          <a className="is-danger is-small row"  >
            <i className="fa fa-thumbs-down fa-2x" />
          </a>
        </section>
        </figure>

        <div className="media-content">
          <div className="content">
            <p>{props.body}</p>
          </div>
        </div>
        <div className="media-right">
        <a className="btn btn-danger" href="#">
  <i className="fa fa-trash-o fa-2x"></i> Delete</a>

        </div>
      </div>
    );
}

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};


export default CommentCard;