/*
 * Action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * Other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * Action creators
 */

export const addTodo = text => ({ type: ADD_TODO, payload: text });

export const toggleTodo = index => ({ type: TOGGLE_TODO, payload: index });

export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, payload: filter });
