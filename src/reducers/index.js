import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodosReducer from './reducer-todos';
import UserReducer from './reducer-user';
import AddProjectReducer from './reducer-addProject';
import ProjectsReducer from './reducer-projects';
import AddTutorialReducer from './reducer-addTutorial';
import TutorialsReducer from './reducer-tutorials';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const Reducers = combineReducers({
  todos: TodosReducer,
  user: UserReducer,
  addProject: AddProjectReducer,
  projects: ProjectsReducer,
  addTutorial: AddTutorialReducer,
  tutorials: TutorialsReducer,
  router: routerReducer,
});

export default Reducers;
