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
			expect(test.topics).toEqual([
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
			expect(test.topics).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

	describe('FETCH_ARTICLES actions reducer', () => {
		test('action: FETCH_ARTICLES_REQUEST', () => {
			const action = {
				type: types.FETCH_ARTICLES_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_ARTICLES_SUCCESS', () => {
			const action = {
				type: types.FETCH_ARTICLES_SUCCESS,
				payload: [
					{
						title: 'Article Title',
						description: 'Article Descriiption'
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.articles).toEqual([
				{
					title: 'Article Title',
					description: 'Article Descriiption'
				}
			]);
		});

		test('action: FETCH_ARTICLES_ERROR', () => {
			const action = {
				type: types.FETCH_ARTICLES_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.articles).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

	describe('FETCH_USERS actions reducer', () => {
		test('action: FETCH_USERS_REQUEST', () => {
			const action = {
				type: types.FETCH_USERS_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_USERS_SUCCESS', () => {
			const action = {
				type: types.FETCH_USERS_SUCCESS,
				payload: [
					{
						title: 'User Title',
						description: 'User Descriiption'
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.users).toEqual([
				{
					title: 'User Title',
					description: 'User Descriiption'
				}
			]);
		});

		test('action: FETCH_USERS_ERROR', () => {
			const action = {
				type: types.FETCH_USERS_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.users).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

});

