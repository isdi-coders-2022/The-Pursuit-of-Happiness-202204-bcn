import {
  addToFav,
  loadFavShows,
  loadShows,
  newShowToAdd,
  deleteFav,
} from "../actions/showsActionTypes";

const showListReducer = (shows, action) => {
  let newShow;

  switch (action.type) {
    case loadShows:
      newShow = [...action.shows];
      break;
    case loadFavShows:
      newShow = [...action.shows];
      break;
    case newShowToAdd:
      newShow = [...shows, action.shows];
      break;
    case addToFav:
      newShow = [...shows, action.shows];
      break;
    case deleteFav:
      newShow = shows.splice(shows.indexOf(action.shows), 2);
      break;
    default:
      newShow = [...shows];
  }

  return newShow;
};

export default showListReducer;
