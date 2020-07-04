import { combineReducers } from 'redux';
import categoryReducer from './ducks/categoryDucks';

const createReducer = ([initialState, actionsHandlers]) => (
  state = initialState,
  action
) =>
  (actionsHandlers[action.type] &&
    actionsHandlers[action.type](state, action)) ||
  state;

const createRootReducer = () =>
  combineReducers({
    category: createReducer(categoryReducer),
  });

export default createRootReducer;
