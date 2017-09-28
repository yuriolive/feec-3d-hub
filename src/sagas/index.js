// Worker Saga: access API
// Watcher Saga: listen for actions to be dispatched and call the worker
import { fork } from 'redux-saga/effects';
import { watchEmailRegister, watchEmailLogin, watchLogout } from './saga-user';

export default function* Sagas() {
  yield [
    fork(watchEmailRegister),
    fork(watchEmailLogin),
    fork(watchLogout),
  ];
}
