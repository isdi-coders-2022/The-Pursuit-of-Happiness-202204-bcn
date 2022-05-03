import { initialShowLoad } from "../actions/showListActionTypes";

const showsReducer = (currentShows, action) => {
  let showList;

  switch (action.type) {
    case initialShowLoad:
      showList = [...action.shows];
      break;

    default:
      showList = [...currentShows];
  }

  return showList;
};

export default showsReducer;
