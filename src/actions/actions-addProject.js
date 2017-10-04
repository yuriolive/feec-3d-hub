/*
 * Action types
 */

// Add project
export const ADD_PROJECT_LOADING = 'ADD_PROJECT_LOADING';

export const ADD_PROJECT_REQUESTED = 'ADD_PROJECT_REQUESTED';

export const ADD_PROJECT_SUCCEEDED = 'ADD_PROJECT_SUCCEEDED';

export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED';


/*
 * Action creators
 */

export const addProjectLoadingToggle = () => ({ type: ADD_PROJECT_LOADING });

export const addProject = projectData => (
  { type: ADD_PROJECT_REQUESTED, payload: projectData });

