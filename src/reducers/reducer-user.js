import {
  EMAIL_LOGIN_LOADING,
  USER_EMAIL_LOGIN_FAILED,
  USER_EMAIL_LOGIN_SUCCEEDED,
  EMAIL_REGISTER_LOADING,
  USER_EMAIL_REGISTER_SUCCEEDED,
  USER_EMAIL_REGISTER_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  USER_STATE_CHANGED,
} from '../actions';

const defaultUserState = {
  loginLoading: false,
  registerLoading: false,
  user: {},
  loggedIn: false,
};

export default function (state = defaultUserState, action) {
  switch (action.type) {
    case EMAIL_LOGIN_LOADING:
      return { ...state, loginLoading: !state.loginLoading };
    case USER_EMAIL_LOGIN_SUCCEEDED:
      return { ...state, user: action.payload, loggedIn: true };
    case USER_EMAIL_LOGIN_FAILED:
      return { ...state, error: action.payload };
    case EMAIL_REGISTER_LOADING:
      return { ...state, registerLoading: !state.registerLoading };
    case USER_EMAIL_REGISTER_SUCCEEDED:
      return { ...state, user: action.payload, loggedIn: true };
    case USER_EMAIL_REGISTER_FAILED:
      return { ...state, error: action.payload };
    case LOGOUT_SUCCEEDED:
      return { ...state, user: {}, loggedIn: false };
    case LOGOUT_FAILED:
      return { ...state, error: action.payload };
    case USER_STATE_CHANGED:
      return { ...state, user: action.payload, loggedIn: (action.payload !== null) };
    default:
      return state;
  }
}
