export const emailLogin = userData => ({ type: 'USER_EMAIL_LOGIN_REQUESTED', payload: userData });

export const facebookLogin = userData => ({ type: 'USER_FACEBOOK_LOGIN_REQUESTED', payload: userData });
