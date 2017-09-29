import * as actions from '../actions/actionCreators';
import  { fetchTopics } from '../actions/asyncActions';

const data = [
  'foo',
  'bar',
  'baz'
];
const errMsg = 'ERROR - Error message';

describe('Test Action Creators ', () => {

	describe('fetchTopics', () => {
		test('is a function', () => {
			expect(typeof fetchTopics).toBe('function');
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

});
