import {
  ADD_TUTORIAL_LOADING,
  ADD_TUTORIAL_FAILED,
} from '../actions';

const defaultAddTutorialState = {
  addTutorialLoading: false,
};

export default function (state = defaultAddTutorialState, action) {
  switch (action.type) {
    case ADD_TUTORIAL_LOADING:
      return { ...state, addTutorialLoading: !state.addTutorialLoading };
    case ADD_TUTORIAL_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
