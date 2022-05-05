import { loadShows } from "./showsActionTypes";

export const showLoader = (shows) => ({
  type: loadShows,
  payload: shows,
});
