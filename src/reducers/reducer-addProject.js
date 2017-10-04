import {
  ADD_PROJECT_LOADING,
  ADD_PROJECT_FAILED,
} from '../actions';

const defaultAddProjectState = {
  addProjectLoading: false,
};

export default function (state = defaultAddProjectState, action) {
  switch (action.type) {
    case ADD_PROJECT_LOADING:
      return { ...state, addProjectLoading: !state.addProjectLoading };
    case ADD_PROJECT_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
