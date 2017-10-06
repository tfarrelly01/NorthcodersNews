import React from 'react';
import PropTypes from 'prop-types';
import UserNotAuthorised from './UserNotAuthorised';
import DeleteComment from './DeleteComment';
import VoteUpOrDown from './VoteUpOrDown';

import { USERNAME } from '../../config';

export class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessage: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleMessageDisplay = this.toggleMessageDisplay.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
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

  handleVoteUp() {
    this.props.commentVote(this.props.id, 'up');
  }

  handleVoteDown() {
    this.props.commentVote(this.props.id, 'down');
  }

  render() {
    let contentToRender;
    if (!this.state.displayMessage) {
      contentToRender = (
        <p>{this.props.body}</p>
      );
    } else {
      contentToRender = (
        <UserNotAuthorised 
          displayMessage={this.state.displayMessage} 
          onClose={this.toggleMessageDisplay} 
        />
      );
    }
    return (
      <div className="media box">
        <VoteUpOrDown 
          id={this.props.id}
          avatarUrl={this.props.avatarUrl}
          votes={this.props.votes}
          handleVoteUp={this.handleVoteUp}
          handleVoteDown={this.handleVoteDown}
        />

        <div className="media-content">
          <div className="content">
            {contentToRender}
          </div>
        </div>

        <DeleteComment handleDelete={this.handleDelete} />

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