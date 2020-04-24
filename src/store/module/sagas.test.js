import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { getUsers } from '../../services/api.service';
import {
  ACTION_TYPES,
  CONSTANTS
} from './constants';
import {
  fetchUsers,
  searchTextChangeFlow,
  toggleNationalityFlow
} from './sagas';
import {
  selectNationalities,
  selectPage,
  selectSearchString,
  selectUsers
} from './selectors'

describe('Saga' , () => {
  describe('searchTextChangeFlow', () => {
    it('works in flow when some search text is provided', () => {
      const exampleText = 'maria';
      const exampleUser = { name: { first: 'Maria', last: 'Bar' } };

      testSaga(searchTextChangeFlow, exampleText)
        .next()
        .put({ type: ACTION_TYPES.SEARCH_TEXT_SET, payload: exampleText })
        .next()
        .put({ type: ACTION_TYPES.SEARCH_TEXT_APPLY_STARTED })
        .next()
        .delay(CONSTANTS.SEARCH_DELAY_MS)
        .next()
        .select(selectUsers)
        .next([exampleUser])
        .select(selectSearchString)
        .next(exampleText)
        .put({ type: ACTION_TYPES.SEARCH_TEXT_APPLY_SUCCESS, payload: [exampleUser] })
        .next()
        .isDone();
    });

    it('works in flow with empty text', () => {
      const exampleEmptyText = '';

      testSaga(searchTextChangeFlow, exampleEmptyText)
        .next()
        .put({ type: ACTION_TYPES.SEARCH_TEXT_SET, payload: exampleEmptyText })
        .next()
        .put({ type: ACTION_TYPES.SEARCH_TEXT_APPLY_STARTED })
        .next()
        .select(selectUsers)
        .next([])
        .select(selectSearchString)
        .next('')
        .put({ type: ACTION_TYPES.SEARCH_TEXT_APPLY_SUCCESS, payload: [] })
        .next()
        .isDone();
    });
  });

  describe('toggleNationalityFlow', () => {
    it('works in a flow which changes value, because there will still be another nationality set to true', () => {
      const action = { payload: 'polish' };

      testSaga(toggleNationalityFlow, action)
        .next()
        .select(selectNationalities)
        .next({ polish: true, english: true })
        .put({ type: ACTION_TYPES.NATIONALITY_SET, payload: 'polish' })
        .next()
        .isDone();
    });

    it('works in a flow which doesn\'t change value, because at least one nationality needs to be selected', () => {
      const action = { payload: 'polish' };

      testSaga(toggleNationalityFlow, action)
        .next()
        .select(selectNationalities)
        .next({ polish: true })
        .isDone();
    });

    it('works in a flow which changes value, because it was off earlier', () => {
      const action = { payload: 'polish' };

      testSaga(toggleNationalityFlow, action)
        .next()
        .select(selectNationalities)
        .next({ polish: false })
        .put({ type: ACTION_TYPES.NATIONALITY_SET, payload: 'polish' })
        .next()
        .isDone();
    })
  });

  describe('fetchUsers', () => {
    const page = 2;
    const nationalities = { polish: true };
    const cacheMock = [{ a: 1 }, { a: 2 }];

    it('saves users on success fetch', () => {
      return expectSaga(fetchUsers)
        .put({ type: ACTION_TYPES.USERS_FETCHING_STARTED })
        .provide([
          [matchers.select(selectPage), page],
          [matchers.select(selectNationalities), nationalities],
          [matchers.call.fn(getUsers, {
            usersCount: CONSTANTS.USERS_PER_TICK,
            nationalities,
            page
          }), cacheMock]
        ])
        .put({ type: ACTION_TYPES.USERS_FETCHING_SUCCESS, payload: cacheMock })
        .run();
    });

    it('doesn\'t save users on error fetch', () => {
      const errorRes = new Error('error');
      return expectSaga(fetchUsers)
        .put({ type: ACTION_TYPES.USERS_FETCHING_STARTED })
        .provide([
          [matchers.select(selectPage), page],
          [matchers.select(selectNationalities), nationalities],
          [matchers.call.fn(getUsers, {
            usersCount: CONSTANTS.USERS_PER_TICK,
            nationalities,
            page
          }), throwError(errorRes)]
        ])
        .put({ type: ACTION_TYPES.USERS_FETCHING_ERROR, payload: errorRes })
        .run();
    })
  })
});