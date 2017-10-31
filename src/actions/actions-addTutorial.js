/*
 * Action types
 */

// Add tutorial
export const ADD_TUTORIAL_LOADING = 'ADD_TUTORIAL_LOADING';

export const ADD_TUTORIAL_REQUESTED = 'ADD_TUTORIAL_REQUESTED';

export const ADD_TUTORIAL_SUCCEEDED = 'ADD_TUTORIAL_SUCCEEDED';

export const ADD_TUTORIAL_FAILED = 'ADD_TUTORIAL_FAILED';


/*
 * Action creators
 */

export const addTutorialLoadingToggle = () => ({ type: ADD_TUTORIAL_LOADING });

export const addTutorial = tutorialData => (
  { type: ADD_TUTORIAL_REQUESTED, payload: tutorialData });

