// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import { firebaseAuth } from '../firebase';

export function* emailLogin(action) {
  try {
    // TODO Put disable submit button

    const user = yield call(
      [firebaseAuth, firebaseAuth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.password);

    console.log(user);

    yield put({ type: 'USER_EMAIL_LOGIN_SUCCEEDED', payload: user });

    // TODO Redirect page
    // yield history.push('/');
  } catch (e) {
    console.log(e);
    yield put({ type: 'USER_EMAIL_LOGIN_FAILED', message: e.message });
  }
}

export function* watchEmailLogin() {
  yield takeEvery('USER_EMAIL_LOGIN_REQUESTED', emailLogin);
}
