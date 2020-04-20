import {
  all,
  call,
  cancel,
  delay,
  fork,
  put,
  race,
  select,
  take,
  takeEvery
} from 'redux-saga/effects';

import { ACTION_TYPES, CONSTANTS } from './constants';
import { getUsers } from '../../services/api.service';

export function* toggleNationalityFlow({ payload }) {
  const nationalities = yield select(state => state.app.nationalities);
  const isClickedCurrentlyOff = !nationalities[payload];
  const selectedCount = Object.values(nationalities).filter(Boolean).length;

  if (isClickedCurrentlyOff || selectedCount > 1) {
    yield put({
      type: ACTION_TYPES.NATIONALITY_SET,
      payload: payload
    });
  }
}

export function* watchNationalityClick() {
  yield takeEvery(ACTION_TYPES.NATIONALITY_TOGGLE, toggleNationalityFlow);
}

export function* searchTextChangeFlow(payload) {
  yield put({
    type: ACTION_TYPES.SEARCH_TEXT_SET,
    payload
  });
  yield put({
    type: ACTION_TYPES.SEARCH_TEXT_APPLY_STARTED,
  });
  if (!!payload?.length)  {
    yield delay(CONSTANTS.SEARCH_DELAY_MS);
  }


  const usersState = yield select(state => state.app.users);
  const searchString = yield select(state => state.app.search.searchString);

  const usersVisible = usersState.filter((user) => {
    const fullName = `${user?.name.first} ${user?.name.last}`?.toLowerCase();
    const testString = searchString?.toLowerCase();
    return fullName?.includes(testString)
  });

  const searchedUsers = !!searchString?.length ? usersVisible : [];

  yield put({
    type: ACTION_TYPES.SEARCH_TEXT_APPLY_SUCCESS,
    payload: searchedUsers
  });
}

export function* watchSearchTextChange() {
  let task;
  while (true) {
    const { payload } = yield take(ACTION_TYPES.SEARCH_TEXT_CHANGE);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(searchTextChangeFlow, payload);
  }
}

export function* fetchUsers() {
  yield put({
    type: ACTION_TYPES.USERS_FETCHING_STARTED
  });

  const nationalities = yield select(state => state.app.nationalities);
  const selectedNationalities = Object.keys(nationalities)
    .filter((name) => nationalities[name]);

  try {
    const cache = yield call(getUsers ,{
      usersCount: CONSTANTS.USERS_PER_TICK,
      nationalities: selectedNationalities
    });

    console.log('FETCHED USERS:', cache);

    yield put({
      type: ACTION_TYPES.USERS_FETCHING_SUCCESS,
      payload: cache
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.USERS_FETCHING_ERROR,
      payload: error
    });
  }
}

export function* bottomReachedFlow() {
  const usersState = yield select(state => state.app.users);
  const cacheState = yield select(state => state.app.usersCache);
  const shouldSaveCache = (usersState?.length + cacheState?.length) < CONSTANTS.USERS_MAX_COUNT;

  const allEffects = [
    ...(shouldSaveCache ? [fork(fetchUsers)] : []),
    put({
      type: ACTION_TYPES.USERS_SHOW_MORE
    }),
    ...(!shouldSaveCache ? [put({
        type: ACTION_TYPES.USERS_FETCHING_SUCCESS,
        payload: []
      })] : [])
  ];

  yield all(allEffects);
}

export function* watchBottomReached() {
  while (true) {
    yield all([
      take(ACTION_TYPES.USERS_FETCHING_SUCCESS),
      take(ACTION_TYPES.BOTTOM_REACHED)
    ]);
    yield fork(bottomReachedFlow);
  }
}

export function* watchInitialize() {
  while (true) {
    const [initialize, nationalitySet] = yield race([
      take(ACTION_TYPES.INITIALIZE_REQUEST),
      take(ACTION_TYPES.NATIONALITY_SET)
    ]);
    if (nationalitySet) { return }
    if (initialize) {
      const users = yield select(state => state.app.users);
      const usersCache = yield select(state => state.app.usersCache);
      if (!users.length && !usersCache.length) {
        yield fork(fetchUsers);
      }
    }
  }
}

export default function* rootSaga() {
  yield all([
    watchInitialize(),
    watchBottomReached(),
    watchNationalityClick(),
    watchSearchTextChange()
  ]);
}