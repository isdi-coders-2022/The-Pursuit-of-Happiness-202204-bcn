import initialShowLoad from "../showListActionTypes";

export const showShowsList = (shows) => ({
  type: initialShowLoad,
  shows,
});
