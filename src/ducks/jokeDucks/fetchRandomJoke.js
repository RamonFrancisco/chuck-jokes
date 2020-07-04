/* Action types */
export const CALL_FETCH_RANDOM_JOKE = '@joke/CALL_FETCH_RANDOM_JOKE';
export const FETCH_RANDOM_JOKE_FAILED = '@joke/FETCH_RANDOM_JOKE_FAILED';
export const FETCH_RANDOM_JOKE_SUCCESS = '@joke/FETCH_RANDOM_JOKE_SUCCESS';

/* Action creators */
export const callFetchRandomJoke = (categoryName) => ({
  type: CALL_FETCH_RANDOM_JOKE,
  categoryName,
});

export const fetchRandomJokeFailed = (categoryName, error) => ({
  type: FETCH_RANDOM_JOKE_FAILED,
  categoryName,
  error,
});

export const fetchRandomJokeSuccess = (categoryName, joke) => ({
  type: FETCH_RANDOM_JOKE_SUCCESS,
  categoryName,
  joke,
});

/* Action handlers */
export const onCallFetchRandomJoke = (state, { categoryName }) => ({
  ...state,
  errors: {
    ...state.errors,
    fetchRandomJoke: {
      ...state.errors.fetchRandomJoke,
      [categoryName]: null,
    },
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: {
      ...state.loading.fetchRandomJoke,
      [categoryName]: true,
    },
  },
});

export const onFetchRandomJokeFailed = (state, { categoryName, error }) => ({
  ...state,
  errors: {
    ...state.errors,
    fetchRandomJoke: {
      ...state.errors.fetchRandomJoke,
      [categoryName]: error,
    },
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: {
      ...state.loading.fetchRandomJoke,
      [categoryName]: false,
    },
  },
});

export const onFetchRandomJokeSuccess = (state, { categoryName, joke }) => ({
  ...state,
  data: joke,
  errors: {
    ...state.errors,
    fetchRandomJoke: {
      ...state.errors.fetchRandomJoke,
      [categoryName]: false,
    },
  },
  loading: {
    ...state.loading,
    fetchRandomJoke: {
      ...state.loading.fetchRandomJoke,
      [categoryName]: false,
    },
  },
});
