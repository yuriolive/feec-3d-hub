// import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { firebaseDb, firebaseSt } from '../firebase';
import {
  ADD_PROJECT_LOADING,
  ADD_PROJECT_REQUESTED,
  ADD_PROJECT_SUCCEEDED,
  ADD_PROJECT_FAILED,
} from '../actions';
import RandomUUID from '../functions/RandomUUID';

/*
 * Add PROJECT
 */
export function* addProject(action) {
  const uid = action.payload.uid;
  const randomFileName = RandomUUID();
  const userStRef = firebaseSt.ref().child(`/user/${uid}/files`);
  const fileStRef = userStRef.child(`${randomFileName}.zip`);
  const imageExt = action.payload.image.value.name.split('.').pop();
  const imageName = `${randomFileName}.${imageExt}`;
  const imageStRef = userStRef.child(imageName);
  const projectDbRef = firebaseDb.ref().child('projects');

  try {
    // Disable submit button
    yield put({ type: ADD_PROJECT_LOADING });

    yield call([imageStRef, imageStRef.put], action.payload.image.value);
    yield call([fileStRef, fileStRef.put], action.payload.file.value);

    const newProjectKey = yield call([projectDbRef, projectDbRef.push]);

    const date = new Date();

    yield call([newProjectKey, newProjectKey.set], {
      image: imageName,
      title: action.payload.title.value,
      description: action.payload.description.value,
      materials: action.payload.materials.value,
      tags: action.payload.tags.value.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      user: uid,
      file: randomFileName,
      date: date.toISOString(),
    });

    yield put({ type: ADD_PROJECT_SUCCEEDED });

    // Enable submit button
    yield put({ type: ADD_PROJECT_LOADING });

    // Redirect to first page
    yield put(push('/projetos'));
  } catch (e) {
    yield put({ type: ADD_PROJECT_FAILED, message: e.message });

    // Enable submit button
    yield put({ type: ADD_PROJECT_LOADING });
  }
}

export default function* watchAddProject() {
  yield takeEvery(ADD_PROJECT_REQUESTED, addProject);
}
