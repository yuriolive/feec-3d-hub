/*
 * Action types
 */

// Get tutorials
// export const GET_TUTORIAl_LOADING = 'GET_TUTORIAL_LOADING';

export const GET_TUTORIALS_REQUESTED = 'GET_TUTORIALS_REQUESTED';

export const GET_TUTORIALS_SUCCEEDED = 'GET_TUTORIALS_SUCCEEDED';

export const GET_TUTORIALS_FAILED = 'GET_TUTORIALS_FAILED';

// Get tutorial
// export const GET_TUTORIAL_LOADING = 'GET_TUTORIAl_LOADING';

export const GET_TUTORIAL_REQUESTED = 'GET_TUTORIAL_REQUESTED';

export const GET_TUTORIAL_SUCCEEDED = 'GET_TUTORIAL_SUCCEEDED';

export const GET_TUTORIAL_FAILED = 'GET_TUTORIAL_FAILED';

export const RESET_TUTORIAL_REQUESTED = 'RESET_TUTORIAL_REQUESTED';


/*
 * Action creators
 */

// export const getTutorialLoadingToggle = () => ({ type: GET_TUTORIAL_LOADING });

export const getTutorials = () => ({ type: GET_TUTORIALS_REQUESTED });

export const getTutorial = id => ({ type: GET_TUTORIAL_REQUESTED, payload: id });
