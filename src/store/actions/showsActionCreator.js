import {
  addToFav,
  loadFavShows,
  loadShowById,
  loadShows,
} from "./showsActionTypes";

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

export const showLoaderById = (shows) => ({
  type: loadShowById,
  shows,
});
