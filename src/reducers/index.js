import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import LoggedInReducer from "./isLoggedIn";

const JoinedReducers = combineReducers({
  count: CounterReducer,
  loggedIn: LoggedInReducer
});

export default JoinedReducers;
