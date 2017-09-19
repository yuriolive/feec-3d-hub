export default function (state = [], action) {
  switch (action.type) {
    case 'USER_EMAIL_LOGIN_SUCCEEDED':
      return [...state, action.payload];
    case 'USER_EMAIL_LOGIN_FAILED':
      return [...state, action.payload];
    default:
      return state;
  }
}
