import actionTypes from "./showsActionTypes";

export const loadShows = (shows) => ({
  type: actionTypes.loadShows,
  payload: shows,
});
