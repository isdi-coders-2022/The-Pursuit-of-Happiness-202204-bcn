import actionTypes from "../actions/showsActionTypes";

const showListReducer = (shows, action) => {
  let newShow;

  switch (action.type) {
    case actionTypes.loadShows:
      newShow = [...shows];
      break;

    default:
      newShow = [...action.shows];
  }
  return newShow;
};

export default showListReducer;
