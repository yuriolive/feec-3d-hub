import {
  GET_PROJECTS_SUCCEEDED,
  GET_PROJECTS_FAILED,
  GET_PROJECT_SUCCEEDED,
  GET_PROJECT_FAILED,
} from '../actions';

const defaultProjectsState = {
  values: [],
  currentValue: {
    image: '',
    imageUrl: '',
    title: '',
    description: '',
    materials: '',
    tags: [],
    user: '',
    file: '',
    fileUrl: '',
  },
};

export default function (state = defaultProjectsState, action) {
  switch (action.type) {
    case GET_PROJECTS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_PROJECTS_FAILED:
      return { ...state, error: action.payload };
    case GET_PROJECT_SUCCEEDED:
      return { ...state, currentValue: action.payload };
    case GET_PROJECT_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
