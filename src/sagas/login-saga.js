// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
// import { browserHistory } from 'react-router';
import { firebaseAuth } from '../firebase';
import { EMAIL_LOGIN_LOADING, USER_EMAIL_LOGIN_REQUESTED, USER_EMAIL_LOGIN_SUCCEEDED, USER_EMAIL_LOGIN_FAILED } from '../actions/actions-login';

export function* emailLogin(action) {
  try {
    // Disable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });

    const user = yield call(
      [firebaseAuth, firebaseAuth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.password);

    yield put({ type: USER_EMAIL_LOGIN_SUCCEEDED, payload: user });

    // Enable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });

    // Redirect to first page
    // yield browserHistory.push('/');
  } catch (e) {
    yield put({ type: USER_EMAIL_LOGIN_FAILED, message: e.message });

    // Enable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });
  }
}

export function* watchEmailLogin() {
  yield takeEvery(USER_EMAIL_LOGIN_REQUESTED, emailLogin);
}
