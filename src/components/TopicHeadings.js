import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import 'bulma/css/bulma.css';
import { fetchTopics } from '../actions/asyncActions';

export class TopicHeadings extends React.Component {
	componentDidMount() {
		this.props.fetchTopics();
	}

  render() {
    return (
      <div>
        <nav className="level">
          <Link to={'/'}>
              All
          </Link>
          {this.props.topics.map(topic => (
            <Link key={topic._id} to={`/topics/${topic.slug}/articles`}>
              {topic.title}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		topics: state.topics
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTopics: () => {
			dispatch(fetchTopics());
		}
	};
}

TopicHeadings.propTypes = {
	topics: PropTypes.array.isRequired,
	fetchTopics: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicHeadings);
