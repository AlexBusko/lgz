import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducers = combineReducers({
  sidebar: sidebarReducer,
});
