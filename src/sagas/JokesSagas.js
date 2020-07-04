import { all, fork, put, call, takeEvery } from 'redux-saga/effects';

import ChuckNorrisAPI from '../integrations/ChuckNorrisAPI';

import {
  CALL_FETCH_RANDOM_JOKE,
  fetchRandomJokeFailed,
  fetchRandomJokeSuccess,
} from '../ducks/jokeDucks/fetchRandomJoke';

function* callFetchRandomJokeSaga({ categoryName }) {
  try {
    const joke = yield call(ChuckNorrisAPI.fetchRandomJoke, { categoryName });

    yield put(fetchRandomJokeSuccess(categoryName, joke));
  } catch (error) {
    yield put(fetchRandomJokeFailed(categoryName, error));
  }
}

function* callFetchRandomJokeSagas() {
  yield takeEvery(CALL_FETCH_RANDOM_JOKE, callFetchRandomJokeSaga);
}
export default function* () {
  yield all([fork(callFetchRandomJokeSagas)]);
}
