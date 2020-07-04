/* Action types */
export const CALL_CATEGORIES = '@home/CALL_CATEGORIES';
export const CALL_CATEGORIES_FAILED = '@home/CALL_CATEGORIES_FAILED';
export const CALL_CATEGORIES_SUCCESS = '@home/CALL_CATEGORIES_SUCCESS';

/* Action creators */
export const callCategories = () => ({
  type: CALL_CATEGORIES,
});

export const callCategoriesFailed = (error) => ({
  type: CALL_CATEGORIES_FAILED,
  error,
});

export const callCategoriesSuccess = (categories) => ({
  type: CALL_CATEGORIES_SUCCESS,
  categories,
});

/* Action handlers */
export const onCallCategories = (state) => ({
  ...state,
  errors: {
    ...state.errors,
    callCategories: null,
  },
  loading: {
    ...state.loading,
    callCategories: true,
  },
});

export const onCallCategoriesFailed = (state, { error }) => ({
  ...state,
  errors: {
    ...state.errors,
    callCategories: error,
  },
  loading: {
    ...state.loading,
    callCategories: false,
  },
});

export const onCallCategoriesSuccess = (state, { categories }) => ({
  ...state,
  data: categories,
  errors: {
    ...state.errors,
    callCategories: false,
  },
  loading: {
    ...state.loading,
    callCategories: false,
  },
});
