import {
  CALL_CATEGORIES,
  CALL_CATEGORIES_FAILED,
  CALL_CATEGORIES_SUCCESS,
  onCallCategories,
  onCallCategoriesFailed,
  onCallCategoriesSuccess,
} from './fetchCategories';

const ACTION_HANDLERS = {
  /* Call categories */
  [CALL_CATEGORIES]: onCallCategories,
  [CALL_CATEGORIES_FAILED]: onCallCategoriesFailed,
  [CALL_CATEGORIES_SUCCESS]: onCallCategoriesSuccess,
};

const INITIAL_STATE = {
  data: [],
  errors: {
    callCategories: null,
  },
  loading: {
    callCategories: null,
  },
};

export default [INITIAL_STATE, ACTION_HANDLERS];
