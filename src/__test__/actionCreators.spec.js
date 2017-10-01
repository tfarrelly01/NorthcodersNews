import * as actions from '../actions/actionCreators';
import * as asyncActions from '../actions/asyncActions';

const data = [
  'foo',
  'bar',
  'baz'
];
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
	
});
