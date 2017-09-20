/*
 * Action types
 */

// Email Login
export const EMAIL_LOGIN_LOADING = 'EMAIL_LOGIN_LOADING';

export const USER_EMAIL_LOGIN_REQUESTED = 'USER_EMAIL_LOGIN_REQUESTED';

export const USER_EMAIL_LOGIN_SUCCEEDED = 'USER_EMAIL_LOGIN_SUCCEEDED';

export const USER_EMAIL_LOGIN_FAILED = 'USER_EMAIL_LOGIN_FAILED';


// Facebook Login
export const USER_FACEBOOK_LOGIN_REQUESTED = 'USER_FACEBOOK_LOGIN_REQUESTED';


/*
 * Action creators
 */

export const emailLoginLoadingToggle = () => ({ type: EMAIL_LOGIN_LOADING });

export const emailLogin = userData => ({ type: USER_EMAIL_LOGIN_REQUESTED, payload: userData });

export const facebookLogin = userData => (
  { type: USER_FACEBOOK_LOGIN_REQUESTED, payload: userData });
