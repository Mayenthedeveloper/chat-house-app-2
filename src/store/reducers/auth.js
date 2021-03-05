import { LOGIN, REGISTER } from "../actions/auth";

const initialState = {
  // user: JSON.parse(localStorage.getItem('user')) || {},
  // token: localStorage.getItem('token') || '',
  // isLoggedIn: !!localStorage.getItem('user'),

  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };

    case REGISTER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
