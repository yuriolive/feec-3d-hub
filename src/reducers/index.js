import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodosReducer from './reducer-todos';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const Reducers = combineReducers({
  todos: TodosReducer,
  router: routerReducer,
});

export default Reducers;
