import { loadFavShows, loadShows } from "../actions/showsActionTypes";

const showListReducer = (shows, action) => {
  let newShow;

  switch (action.type) {
    case loadShows:
      newShow = [...action.payload];

      break;
    case loadFavShows:
      newShow = [...action.payload];

      break;

    default:
      newShow = { ...shows };
  }

  return newShow;
};

export default showListReducer;
