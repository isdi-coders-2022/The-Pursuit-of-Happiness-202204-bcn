import { loadShows } from "./showsActionTypes";

export const showLoader = (shows) => ({
  type: loadShows,
  shows,
});
