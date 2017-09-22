import { EMAIL_LOGIN_LOADING, USER_EMAIL_LOGIN_FAILED, USER_EMAIL_LOGIN_SUCCEEDED } from '../actions/actions-login';

const defaultLoginState = {
  loading: false,
  user: {},
  loggedIn: false,
};

export default function (state = defaultLoginState, action) {
  switch (action.type) {
    case EMAIL_LOGIN_LOADING:
      return { ...state, loading: !state.loading };
    case USER_EMAIL_LOGIN_SUCCEEDED:
      return { ...state, user: action.payload, loggedIn: true };
    case USER_EMAIL_LOGIN_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
