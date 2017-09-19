import FirebaseAuth from 'firebase/auth';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* emailRegister(action) {
  try {
    const user = yield call(FirebaseAuth.createUserWithEmailAndPassword(action.payload.email, action.payload.password));
    yield put({ type: "USER_EMAIL_REGISTER_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_EMAIL_REGISTER_FAILED", message: e.message });
  }
}

export function* watchEmailRegister() {
  yield takeEvery("USER_EMAIL_REGISTER_REQUESTED", emailRegister);
}