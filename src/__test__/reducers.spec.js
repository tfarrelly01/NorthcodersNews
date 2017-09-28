import reducer from '../reducer/reducer';
import INITIAL_STATE from '../reducer/INITIAL_STATE';
import * as types from '../actions/actionTypes';

describe('REDUCER', () => {
	test('is a function', () => {
		expect(typeof reducer).toBe('function');
	});

	test('returns an object', () => {
		expect(typeof reducer()).toBe('object');
	});

	describe('FETCH_TOPICS actions reducer', () => {
		test('action: FETCH_TOPICS_REQUEST', () => {
			const action = {
				type: types.FETCH_TOPICS_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_TOPICS_SUCCESS', () => {
			const action = {
				type: types.FETCH_TOPICS_SUCCESS,
				payload: [
					{
						title: 'Coding',
						slug: 'coding'
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.data).toEqual([
				{
					title: 'Coding',
					slug: 'coding',
				}
			]);
		});

		test('action: FETCH_TOPICS_ERROR', () => {
			const action = {
				type: types.FETCH_TOPICS_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.data).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});
});

