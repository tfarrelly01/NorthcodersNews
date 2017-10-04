import * as actions from '../actions/actionCreators';
import * as asyncActions from '../actions/asyncActions';

const data = [
  'foo',
  'bar',
  'baz'
];
const comment = 'I am a comment';
const errMsg = 'ERROR - Error message';

describe('Test Action Creators ', () => {

	describe('Action Creator: fetchTopics', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchTopics).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchTopicsRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchTopicsSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchTopicsError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchTopicsSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchTopicsError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: fetchArticles', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchArticles).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchArticlesRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchArticlesSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchArticlesError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchArticlesSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchArticlesError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: fetchUsers', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchUsers).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchUsersRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchUsersSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchUsersError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchUsersSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchUsersError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});	
	
	describe('Action Creator: fetchUser', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchUser).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchUserRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchUserSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchUserError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchUserSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchUserError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: fetchTopicArticles', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchTopicArticles).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchTopicArticlesRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchTopicArticlesSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchTopicArticlesError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchTopicArticlesSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchTopicArticlesError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: fetchArticle', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchArticle).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchArticleRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchArticleSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchArticleError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchArticleSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchArticleError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: fetchArticleComments', () => {
		test('is a function', () => {
			expect(typeof asyncActions.fetchArticleComments).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.fetchArticleCommentsRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.fetchArticleCommentsSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.fetchArticleCommentsError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.fetchArticleCommentsSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.fetchArticleCommentsError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: articleVote', () => {
		test('is a function', () => {
			expect(typeof asyncActions.articleVote).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.articleVoteRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.articleVoteSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.articleVoteError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.articleVoteSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.articleVoteError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: commentVote', () => {
		test('is a function', () => {
			expect(typeof asyncActions.commentVote).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.commentVoteRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.commentVoteSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.commentVoteError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.commentVoteSuccess(data);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.commentVoteError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: addComment', () => {
		test('is a function', () => {
			expect(typeof asyncActions.addComment).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.addCommentRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.addCommentSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.addCommentError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.addCommentSuccess(comment);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.addCommentError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

	describe('Action Creator: deleteComment', () => {
		test('is a function', () => {
			expect(typeof asyncActions.deleteComment).toBe('function');
		});

		test('request action returns an object', () => {
			expect(typeof actions.deleteCommentRequest()).toEqual('object');
		});

		test('success action returns an object', () => {
			expect(typeof actions.deleteCommentSuccess()).toEqual('object');
		});

		test('error action returns an object', () => {
			expect(typeof actions.deleteCommentError()).toEqual('object');
		});

		test('success action returns data passed', () => {
			const test = actions.deleteCommentSuccess(comment);
      expect(test).toMatchSnapshot();
		});

		test('error action returns data passed', () => {
			const test = actions.deleteCommentError(errMsg);
      expect(test.payload).toEqual(errMsg);
		});
	});

});
