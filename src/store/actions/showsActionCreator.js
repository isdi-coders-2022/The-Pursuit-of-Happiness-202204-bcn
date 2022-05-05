import { loadFavShows, loadShows } from "./showsActionTypes";

export const showLoader = (shows) => ({
  type: loadShows,
  payload: shows,
});
export const favLoader = (shows) => ({
  type: loadFavShows,
  payload: shows,
});
