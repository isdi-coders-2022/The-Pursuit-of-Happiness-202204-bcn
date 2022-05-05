import { loadFavShows, loadShows } from "./showsActionTypes";

export const showLoader = (shows) => ({
  type: loadShows,
  shows,
});
export const favLoader = (shows) => ({
  type: loadFavShows,
  shows,
});
