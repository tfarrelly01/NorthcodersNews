import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchTopics } from '../actions/asyncActions';

class TopicHeadings extends React.Component {
	componentDidMount() {
		this.props.fetchTopics();
	}

  render() {
    return (
      <nav className="navbar is-danger is-bold level">
        <div className="level-item">
          <Link className="navbar-item" to={'/'}>
            <a className="button is-danger is-bold title is-4">
              <span>Home</span>
            </a>
          </Link>              
          {this.props.topics.sort((a,b) => a.title > b.title ? 1 : -1) 
            .map(topic => (
              <Link className="navbar-item" key={topic._id} to={`/topics/${topic.slug}/articles`}>
                <a className="button is-danger is-bold title is-4">
                  <span>{topic.title}</span>
                </a>
              </Link>
            ))}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		topics: state.topics
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTopics: () => {
			dispatch(fetchTopics());
		}
	};
};

TopicHeadings.propTypes = {
	topics: PropTypes.array.isRequired,
	fetchTopics: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicHeadings);
