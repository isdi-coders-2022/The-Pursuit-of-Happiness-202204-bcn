import { loadShows, newShow } from "../actions/showsActionTypes";

const showListReducer = (shows, action) => {
  let newArray;

  switch (action.type) {
    case loadShows:
      newArray = [...shows];
      break;
    case newShow:
      newArray = [...shows, action.shows];
      break;
    default:
      newArray = [...shows];
  }
  return newArray;
};

export default showListReducer;
