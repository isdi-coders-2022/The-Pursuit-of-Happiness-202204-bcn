import { addToFav, loadFavShows, loadShows } from "./showsActionTypes";

export const showLoader = (shows) => ({
  type: loadShows,
  shows,
});
export const favLoader = (shows) => ({
  type: loadFavShows,
  shows,
});
export const favAdder = (shows) => ({
  type: addToFav,
  shows,
});
