import { SHOW, HIDE } from "./types";

export const sidebarReducer = (state = { visible: true }, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, visible: true };
    case HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
};
