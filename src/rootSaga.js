import { all, fork } from 'redux-saga/effects';
import categorySagas from './sagas/CategorySagas';

export default function* () {
  yield all([fork(categorySagas)]);
}
