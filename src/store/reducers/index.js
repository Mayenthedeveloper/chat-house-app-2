import { combineReducers } from "redux";

import chatReducer from "./chat";

import authReducer from "./auth";

export default combineReducers({
  authReducer,
  chatReducer,
});
