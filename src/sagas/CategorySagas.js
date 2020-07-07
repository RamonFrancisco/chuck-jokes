import {
  all, fork, put, call, takeLatest
} from 'redux-saga/effects';

import ChuckNorrisAPI from '../integrations/ChuckNorrisAPI';

import {
  CALL_CATEGORIES,
  callCategoriesFailed,
  callCategoriesSuccess,
} from '../ducks/categoryDucks/fetchCategories';

function* callCategoriesSaga() {
  try {
    const data = yield call(ChuckNorrisAPI.fetchCategories);

    yield put(callCategoriesSuccess(data));
  } catch (error) {
    yield put(callCategoriesFailed());
  }
}

function* callCategoriesSagas() {
  yield takeLatest(CALL_CATEGORIES, callCategoriesSaga);
}

export default function* () {
  yield all([fork(callCategoriesSagas)]);
}
