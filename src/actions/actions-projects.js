/*
 * Action types
 */

// Get projects
// export const GET_PROJECT_LOADING = 'GET_PROJECT_LOADING';

export const GET_PROJECTS_REQUESTED = 'GET_PROJECTS_REQUESTED';

export const GET_PROJECTS_SUCCEEDED = 'GET_PROJECTS_SUCCEEDED';

export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';

// Get project
// export const GET_PROJECT_LOADING = 'GET_PROJECT_LOADING';

export const GET_PROJECT_REQUESTED = 'GET_PROJECT_REQUESTED';

export const GET_PROJECT_SUCCEEDED = 'GET_PROJECT_SUCCEEDED';

export const GET_PROJECT_FAILED = 'GET_PROJECT_FAILED';

export const RESET_PROJECT_REQUESTED = 'RESET_PROJECT_REQUESTED';


/*
 * Action creators
 */

// export const getProjectLoadingToggle = () => ({ type: GET_PROJECT_LOADING });

export const getProjects = () => ({ type: GET_PROJECTS_REQUESTED });

export const getProject = id => ({ type: GET_PROJECT_REQUESTED, payload: id });
