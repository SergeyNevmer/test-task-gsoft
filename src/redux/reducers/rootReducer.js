import { combineReducers } from "redux";
import { saveTodoReducer } from "./saveTodoReducer";

export const rootReducer = combineReducers({
  saveTodoReducer,
});
