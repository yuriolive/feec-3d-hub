// Worker Saga: access API
// Watcher Saga: listen for actions to be dispatched and call the worker
import { fork } from 'redux-saga/effects';
import { watchEmailRegister, watchEmailLogin, watchLogout } from './saga-user';
import watchAddProject from './saga-addProject';
import { watchProjects, watchProject } from './saga-projects';
import watchAddTutorial from './saga-addTutorial';
import { watchTutorials, watchTutorial } from './saga-tutorials';

export default function* Sagas() {
  yield [
    fork(watchEmailRegister),
    fork(watchEmailLogin),
    fork(watchLogout),
    fork(watchAddProject),
    fork(watchProjects),
    fork(watchProject),
    fork(watchAddTutorial),
    fork(watchTutorials),
    fork(watchTutorial),
  ];
}
