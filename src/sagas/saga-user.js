// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { firebaseAuth } from '../firebase';
import {
  EMAIL_LOGIN_LOADING,
  USER_EMAIL_LOGIN_REQUESTED,
  USER_EMAIL_LOGIN_SUCCEEDED,
  USER_EMAIL_LOGIN_FAILED,
  EMAIL_REGISTER_LOADING,
  USER_EMAIL_REGISTER_REQUESTED,
  USER_EMAIL_REGISTER_SUCCEEDED,
  USER_EMAIL_REGISTER_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
} from '../actions';

/*
 * Email Login
 */
export function* emailLogin(action) {
  try {
    // Disable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });

    const user = yield call(
      [firebaseAuth, firebaseAuth.signInWithEmailAndPassword],
      action.payload.email.value,
      action.payload.password.value);

    yield put({ type: USER_EMAIL_LOGIN_SUCCEEDED, payload: user });

    // Enable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });

    // Redirect to first page
    yield put(push('/'));
  } catch (e) {
    yield put({ type: USER_EMAIL_LOGIN_FAILED, message: e.message });

    // Enable submit button
    yield put({ type: EMAIL_LOGIN_LOADING });
  }
}

export function* watchEmailLogin() {
  yield takeEvery(USER_EMAIL_LOGIN_REQUESTED, emailLogin);
}

/*
 * Email Register
 */
export function* emailRegister(action) {
  try {
    // Disable submit button
    yield put({ type: EMAIL_REGISTER_LOADING });

    const user = yield call(
      [firebaseAuth, firebaseAuth.createUserWithEmailAndPassword],
      action.payload.email.value,
      action.payload.password.value);

    yield put({ type: USER_EMAIL_REGISTER_SUCCEEDED, payload: user });

    // Enable submit button
    yield put({ type: EMAIL_REGISTER_LOADING });

    // Redirect to first page
    yield put(push('/'));
  } catch (e) {
    yield put({ type: USER_EMAIL_REGISTER_FAILED, message: e.message });

    // Enable submit button
    yield put({ type: EMAIL_REGISTER_LOADING });
  }
}

export function* watchEmailRegister() {
  yield takeEvery(USER_EMAIL_REGISTER_REQUESTED, emailRegister);
}

/*
 * Logout
 */
export function* logout() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put({ type: LOGOUT_SUCCEEDED });
  } catch (e) {
    yield put({ type: LOGOUT_FAILED, message: e.message });
  }
}

export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUESTED, logout);
}
