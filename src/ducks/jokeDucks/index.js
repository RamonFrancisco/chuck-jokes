import {
  CALL_FETCH_RANDOM_JOKE,
  FETCH_RANDOM_JOKE_FAILED,
  FETCH_RANDOM_JOKE_SUCCESS,
  onCallFetchRandomJoke,
  onFetchRandomJokeFailed,
  onFetchRandomJokeSuccess,
} from './fetchRandomJoke';

const ACTIONS_HANDLERS = {
  /* call fetch random joke */
  [CALL_FETCH_RANDOM_JOKE]: onCallFetchRandomJoke,
  [FETCH_RANDOM_JOKE_FAILED]: onFetchRandomJokeFailed,
  [FETCH_RANDOM_JOKE_SUCCESS]: onFetchRandomJokeSuccess,
};

const INITIAL_STATE = {
  data: {},
  errors: {
    fetchRandomJoke: {},
  },
  loading: {
    fetchRandomJoke: {},
  },
};

export default [INITIAL_STATE, ACTIONS_HANDLERS];
