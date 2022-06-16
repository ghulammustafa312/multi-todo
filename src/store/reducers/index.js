import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
export let rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
