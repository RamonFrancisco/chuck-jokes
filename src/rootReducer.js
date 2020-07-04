import { combineReducers } from 'redux';
import categoryReducer from './ducks/categoryDucks';
import jokeReducer from './ducks/jokeDucks';

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
    jokes: createReducer(jokeReducer),
  });

export default createRootReducer;
