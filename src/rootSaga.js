import { all, fork } from 'redux-saga/effects';
import categorySagas from './sagas/CategorySagas';
import jokesSagas from './sagas/JokesSagas';

export default function* () {
  yield all([fork(categorySagas), fork(jokesSagas)]);
}
