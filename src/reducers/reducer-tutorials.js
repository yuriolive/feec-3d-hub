import {
  GET_TUTORIALS_SUCCEEDED,
  GET_TUTORIALS_FAILED,
  GET_TUTORIAL_SUCCEEDED,
  GET_TUTORIAL_FAILED,
} from '../actions';

const defaultTutorialsState = {
  values: [],
  currentValue: {
    title: '',
    date: '',
    tags: [],
    user: '',
  },
};

export default function (state = defaultTutorialsState, action) {
  switch (action.type) {
    case GET_TUTORIALS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_TUTORIALS_FAILED:
      return { ...state, error: action.payload };
    case GET_TUTORIAL_SUCCEEDED:
      return { ...state, currentValue: action.payload };
    case GET_TUTORIAL_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
