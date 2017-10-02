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
					slug: 'coding'
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
						description: 'Article Description'
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.articles).toEqual([
				{
					title: 'Article Title',
					description: 'Article Description'
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

	describe('FETCH_TOPIC_ARTICLES actions reducer', () => {
		test('action: FETCH_TOPIC_ARTICLES_REQUEST', () => {
			const action = {
				type: types.FETCH_TOPIC_ARTICLES_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_TOPIC_ARTICLES_SUCCESS', () => {
			const action = {
				type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
				payload: [
					{
						_id: '59b8055c4aa8a6146505ef2f',
						title: "What does Jose Mourinho's handwriting say about his personality?",
						body:
							"Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
						created_by: 'tickle122',
						belongs_to: 'football',
						votes: 10,
						__v: 0,
						comments: 6
					},
					{
						_id: '59b8055c4aa8a6146505ef30',
						title: 'Who Will Manage Your Club in 2021?',
						body:
							'Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.',
						created_by: 'tickle122',
						belongs_to: 'football',
						votes: 8,
						__v: 0,
						comments: 6
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.articles).toEqual(action.payload);
		});

		test('action: FETCH_TOPIC_ARTICLES_ERROR', () => {
			const action = {
				type: types.FETCH_TOPIC_ARTICLES_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.articles).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

	describe('FETCH_ARTICLE actions reducer', () => {
		test('action: FETCH_ARTICLE_REQUEST', () => {
			const action = {
				type: types.FETCH_ARTICLE_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_ARTICLE_SUCCESS', () => {
			const action = {
				type: types.FETCH_ARTICLE_SUCCESS,
				payload: {
					_id: '59b8055c4aa8a6146505ef30',
					title: 'Who Will Manage Your Club in 2021?',
					body:
						'Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.',
					created_by: 'tickle122',
					belongs_to: 'football',
					votes: 8,
					__v: 0,
					comments: 6
				}
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.article).toEqual(action.payload);
		});

		test('action: FETCH_ARTICLE_ERROR', () => {
			const action = {
				type: types.FETCH_ARTICLE_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.article).toEqual({});
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

	describe('FETCH_ARTICLE_COMMENTS actions reducer', () => {
		test('action: FETCH_ARTICLE_COMMENTS_REQUEST', () => {
			const action = {
				type: types.FETCH_ARTICLE_COMMENTS_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: FETCH_ARTICLE_COMMENTS_SUCCESS', () => {
			const action = {
				type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
				payload: [
					{
						_id: '59b8055c4aa8a6146505efb2',
						body:
							'Omuder niciwel udowag udihuko bajbi si opesemco ja lilipo so puri gombi. Sozahi ugotu ohevevhi jopsuije nepa za ejuemojin oto kaduksak pa egu rapev. Jarnu baf ivicedbub tir epo pilzavmoj kavkuzla riced wulutawu irwera sinimev sewtiz fogvi juca.',
						belongs_to: '59b8055c4aa8a6146505ef3b',
						__v: 0,
						created_by: 'happyamy2016',
						votes: 8,
						created_at: 1504732960000
					},
					{
						_id: '59b8055c4aa8a6146505efb3',
						body:
							'Hihemif foaz eb viw batopfu efoago wakzijuw lad pim sawok saz dir fi bekgu pukma kenurib. Gu ta biw owhas dehmujon dow el ze sumi cebkek wewablub hol wije dotwez febvihoc di siperob. Emzis ekauk ojganip seusauje uteka zak puweipe hawaj todjiabe ibeskaf beok vaessu sik lahuhaoh hup dozgi cehrib. Bataz og biuhuvit aba puij ecde jonpadzo vus bedabuje juphis etewuup ap nugabjuh lukezu fe jap.',
						belongs_to: '59b8055c4aa8a6146505ef3b',
						__v: 0,
						created_by: 'cooljmessy',
						votes: 2,
						created_at: 1504750660000
					}
				]
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.comments).toEqual(action.payload);
		});

		test('action: FETCH_ARTICLE_COMMENTS_ERROR', () => {
			const action = {
				type: types.FETCH_ARTICLE_COMMENTS_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.comments).toEqual([]);
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

	describe('ADD_COMMENT actions reducer', () => {
		test('action: ADD_COMMENT_REQUEST', () => {
			const action = {
				type: types.ADD_COMMENT_REQUEST
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(true);
		});

		test('action: ADD_COMMENT_SUCCESS', () => {
			const action = {
				type: types.ADD_COMMENT_SUCCESS,
				payload: 'This is a new comment' 
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.comment).toEqual(action.payload);
		});

		test('action: ADD_COMMENT_ERROR', () => {
			const action = {
				type: types.ADD_COMMENT_ERROR,
				payload: 'ERROR - An error has occurred!'
			};
			const test = reducer(INITIAL_STATE, action);
			expect(test.loading).toEqual(false);
			expect(test.comment).toEqual({});
			expect(test.error).toEqual('ERROR - An error has occurred!');
		});
	});

});
