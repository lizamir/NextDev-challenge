const INITIAL_STATE = {
  user: null,
  accessToken: null,
  refreshToken: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.res.user,
        accessToken: action.res.tokens.accessToken,
        refreshToken: action.res.tokens.refreshToken
      };
    case "LOGOUT":
      return {
        user: null,
        accessToken: null,
        refreshToken: null
      };
    default:
      return state;
  }
};
