import React from 'react';
import PropTypes from 'prop-types';
import UserNotAuthorised from './UserNotAuthorised';
import DeleteComment from './DeleteComment';
import { USERNAME } from '../../config';

export class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessage: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleMessageDisplay = this.toggleMessageDisplay.bind(this);
  }

  handleDelete() {
    if (this.props.createdBy === USERNAME) this.props.deleteComment(this.props.id);
    else this.setState({ displayMessage: true });
  }

  toggleMessageDisplay() {
    this.setState({
      displayMessage: false,
    });
  }  

  render() {
    return (
      <div className="box media">
        <figure className="media-left">
          <p className="image is-96x96">
            <img src={this.props.avatarUrl} alt="User Avatar" />
          </p>
          <section className="level-item has-text-centered ">
            <a 
              className="is-danger is-small row has-text-info" 
              onClick={this.props.commentVote.bind(null, this.props.id, 'up')} 
            >
              <i className="fa fa-thumbs-up fa-2x" />
            </a>
            <span className="row tag is-medium bold">{this.props.votes}</span>
            <a 
              className="is-danger is-small row has-text-info" 
              onClick={this.props.commentVote.bind(null, this.props.id, 'down')} 
            >
              <i className="fa fa-thumbs-down fa-2x" />
            </a>
          </section>
        </figure>

        <div className="media-content">
          <div className="content">
            <p>{this.props.body}</p>
          </div>
        </div>

        <DeleteComment handleDelete={this.handleDelete} />
        
        <UserNotAuthorised 
          displayMessage={this.state.displayMessage} 
          onClose={this.toggleMessageDisplay} 
        />
      </div>
    );
  }
}

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  commentVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default CommentCard;