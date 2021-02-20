import { SHOW, HIDE } from "./types";

export const setShow = () => {
  return {
    type: SHOW,
  };
};

export const setHide = () => {
  return {
    type: HIDE,
  };
};
