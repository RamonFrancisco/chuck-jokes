/* Action types */
export const CALL_FETCH_RANDOM_JOKE = '@joke/CALL_FETCH_RANDOM_JOKE';
export const FETCH_RANDOM_JOKE_FAILED = '@joke/FETCH_RANDOM_JOKE_FAILED';
export const FETCH_RANDOM_JOKE_SUCCESS = '@joke/FETCH_RANDOM_JOKE_SUCCESS';

/* Action creators */
export const callFetchRandomJoke = categoryName => ({
  type: CALL_FETCH_RANDOM_JOKE,
  categoryName,
});

export const fetchRandomJokeFailed = () => ({
  type: FETCH_RANDOM_JOKE_FAILED,
});

export const fetchRandomJokeSuccess = joke => ({
  type: FETCH_RANDOM_JOKE_SUCCESS,
  joke,
});

/* Action handlers */
export const onCallFetchRandomJoke = (state) => ({
  ...state,
  data: {},
  errors: {
    ...state.errors,
    fetchRandomJoke: false,
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: true,
  },
});

export const onFetchRandomJokeFailed = state => ({
  ...state,
  errors: {
    ...state.errors,
    fetchRandomJoke: true,
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: false,
  },
});

export const onFetchRandomJokeSuccess = (state, { joke }) => ({
  ...state,
  data: joke,
  errors: {
    ...state.errors,
    fetchRandomJoke: false,
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: false,
  },
});
