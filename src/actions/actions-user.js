/*
 * Action types
 */

// Email Register
export const EMAIL_REGISTER_LOADING = 'EMAIL_REGISTER_LOADING';

export const USER_EMAIL_REGISTER_REQUESTED = 'USER_EMAIL_REGISTER_REQUESTED';

export const USER_EMAIL_REGISTER_SUCCEEDED = 'USER_EMAIL_REGISTER_SUCCEEDED';

export const USER_EMAIL_REGISTER_FAILED = 'USER_EMAIL_REGISTER_FAILED';

// Email Login
export const EMAIL_LOGIN_LOADING = 'EMAIL_LOGIN_LOADING';

export const USER_EMAIL_LOGIN_REQUESTED = 'USER_EMAIL_LOGIN_REQUESTED';

export const USER_EMAIL_LOGIN_SUCCEEDED = 'USER_EMAIL_LOGIN_SUCCEEDED';

export const USER_EMAIL_LOGIN_FAILED = 'USER_EMAIL_LOGIN_FAILED';

// Logout
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';

export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';

export const LOGOUT_FAILED = 'LOGOUT_FAILED';

// State changed
export const USER_STATE_CHANGED = 'USER_STATE_CHANGED';

// Facebook Login
export const USER_FACEBOOK_LOGIN_REQUESTED = 'USER_FACEBOOK_LOGIN_REQUESTED';


/*
 * Action creators
 */

export const emailRegisterLoadingToggle = () => ({ type: EMAIL_REGISTER_LOADING });

export const emailRegister = userData => (
  { type: USER_EMAIL_REGISTER_REQUESTED, payload: userData });

export const emailLoginLoadingToggle = () => ({ type: EMAIL_LOGIN_LOADING });

export const emailLogin = userData => ({ type: USER_EMAIL_LOGIN_REQUESTED, payload: userData });

export const facebookLogin = userData => (
  { type: USER_FACEBOOK_LOGIN_REQUESTED, payload: userData });

export const logout = () => ({ type: LOGOUT_REQUESTED });

export const stateChanged = userData => ({ type: USER_STATE_CHANGED, payload: userData });
