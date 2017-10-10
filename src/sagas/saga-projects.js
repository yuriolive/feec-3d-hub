// import firebase from 'firebase';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { firebaseSt, firebaseDb } from '../firebase';
import {
  GET_PROJECTS_REQUESTED,
  GET_PROJECTS_SUCCEEDED,
  GET_PROJECTS_FAILED,
  GET_PROJECT_REQUESTED,
  GET_PROJECT_SUCCEEDED,
  GET_PROJECT_FAILED,
} from '../actions';

/*
 * GET PROJECTS
 */
export function* getProjects() {
  const projectDbRef = firebaseDb.ref().child('projects');
  const userStRef = firebaseSt.ref().child('user');
  const projects = [];

  try {
    // const file = yield call([userStRef, userStRef.put], action.payload.file.value);
    const returnedProjects = yield call([projectDbRef, projectDbRef.once], 'value');
    _.forOwn(returnedProjects.val(), (project, key) => {
      projects.push({ ...project, id: key, url: `/projeto/${encodeURIComponent(key)}` });
    });

    const imagesUrl = yield projects.map((p) => {
      const imageStRef = userStRef.child(`${p.user}/files/${p.image}`);
      return call([imageStRef, imageStRef.getDownloadURL]);
    });
    yield put({
      type: GET_PROJECTS_SUCCEEDED,
      payload: projects.map((project, key) => ({ ...project, imageUrl: imagesUrl[key] })),
    });
  } catch (e) {
    yield put({ type: GET_PROJECTS_FAILED, message: e.message });
  }
}

export function* watchProjects() {
  yield takeEvery(GET_PROJECTS_REQUESTED, getProjects);
}

/*
 * GET PROJECT
 */
export function* getProject(action) {
  const projectDbRef = firebaseDb.ref().child(`projects/${action.payload}`);
  const userStRef = firebaseSt.ref().child('user');

  try {
    // const file = yield call([userStRef, userStRef.put], action.payload.file.value);
    const returnedProject = yield call([projectDbRef, projectDbRef.once], 'value');
    const project = returnedProject.val();

    const imageStRef = userStRef.child(`${project.user}/files/${project.image}`);
    const fileStRef = userStRef.child(`${project.user}/files/${project.file}.zip`);

    const [imageUrl, fileUrl] = yield all([
      call([imageStRef, imageStRef.getDownloadURL]),
      call([fileStRef, fileStRef.getDownloadURL]),
    ]);

    yield put({
      type: GET_PROJECT_SUCCEEDED,
      payload: { ...project, imageUrl, fileUrl },
    });
  } catch (e) {
    yield put({ type: GET_PROJECT_FAILED, message: e.message });
  }
}

export function* watchProject() {
  yield takeEvery(GET_PROJECT_REQUESTED, getProject);
}
