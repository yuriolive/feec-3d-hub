// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { firebaseDb } from '../firebase';
import {
  ADD_TUTORIAL_LOADING,
  ADD_TUTORIAL_REQUESTED,
  ADD_TUTORIAL_SUCCEEDED,
  ADD_TUTORIAL_FAILED,
} from '../actions';

/*
 * Add TUTORIAL
 */
export function* addTutorial(action) {
  const uid = action.payload.uid;
  const tutorialDbRef = firebaseDb.ref().child('tutorials');

  try {
    // Disable submit button
    yield put({ type: ADD_TUTORIAL_LOADING });

    const newTutorialKey = yield call([tutorialDbRef, tutorialDbRef.push]);

    const date = new Date();

    yield call([newTutorialKey, newTutorialKey.set], {
      title: action.payload.title.value,
      content: action.payload.content.value,
      tags: action.payload.tags.value.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      user: uid,
      date: date.toISOString(),
    });

    yield put({ type: ADD_TUTORIAL_SUCCEEDED });

    // Enable submit button
    yield put({ type: ADD_TUTORIAL_LOADING });

    // Redirect to first page
    yield put(push('/tutorials'));
  } catch (e) {
    yield put({ type: ADD_TUTORIAL_FAILED, message: e.message });

    // Enable submit button
    yield put({ type: ADD_TUTORIAL_LOADING });
  }
}

export default function* watchAddTutorial() {
  yield takeEvery(ADD_TUTORIAL_REQUESTED, addTutorial);
}
