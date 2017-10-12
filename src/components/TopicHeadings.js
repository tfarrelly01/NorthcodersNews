import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchTopics } from '../actions/asyncActions';
import TopicCard from './TopicCard';

class TopicHeadings extends React.Component {
	componentDidMount() {
		this.props.fetchTopics();
	}

  render() {
    return (
      <nav className="navbar is-danger is-bold">
        <div className="container">
          <div className="level-item">
            <Link className="navbar-item button is-danger is-bold title is-4" to={'/'}>
              Home
            </Link>              
            {this.props.topics.sort((a,b) => a.title > b.title ? 1 : -1) 
              .map(topic => (
                <TopicCard
                  key={topic._id}
                  slug={topic.slug}
                  title={topic.title}
                />
              ))}
          </div>
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
