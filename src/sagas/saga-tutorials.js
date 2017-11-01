// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { firebaseDb } from '../firebase';
import {
  GET_TUTORIALS_REQUESTED,
  GET_TUTORIALS_SUCCEEDED,
  GET_TUTORIALS_FAILED,
  GET_TUTORIAL_REQUESTED,
  GET_TUTORIAL_SUCCEEDED,
  GET_TUTORIAL_FAILED,
} from '../actions';

/*
 * GET TUTORIALS
 */
export function* getTutorials() {
  const tutorialDbRef = firebaseDb.ref().child('tutorials');
  const tutorials = [];

  try {
    // const file = yield call([userStRef, userStRef.put], action.payload.file.value);
    const returnedTutorials = yield call([tutorialDbRef, tutorialDbRef.once], 'value');
    _.forOwn(returnedTutorials.val(), (tutorial, key) => {
      tutorials.push({ ...tutorial, id: key, url: `/tutorial/${encodeURIComponent(key)}` });
    });

    yield put({
      type: GET_TUTORIALS_SUCCEEDED,
      payload: tutorials,
    });
  } catch (e) {
    yield put({ type: GET_TUTORIALS_FAILED, message: e.message });
  }
}

export function* watchTutorials() {
  yield takeEvery(GET_TUTORIALS_REQUESTED, getTutorials);
}

/*
 * GET TUTORIAL
 */
export function* getTutorial(action) {
  const tutorialDbRef = firebaseDb.ref().child(`tutorials/${action.payload}`);

  try {
    // const file = yield call([userStRef, userStRef.put], action.payload.file.value);
    const returnedTutorial = yield call([tutorialDbRef, tutorialDbRef.once], 'value');
    const tutorial = returnedTutorial.val();

    yield put({
      type: GET_TUTORIAL_SUCCEEDED,
      payload: { ...tutorial },
    });
  } catch (e) {
    yield put({ type: GET_TUTORIAL_FAILED, message: e.message });
  }
}

export function* watchTutorial() {
  yield takeEvery(GET_TUTORIAL_REQUESTED, getTutorial);
}
