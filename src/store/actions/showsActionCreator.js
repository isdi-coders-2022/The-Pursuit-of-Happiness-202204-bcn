import actionTypes from "./showsActionTypes";

export const initialShowLoad = () => ({
  type: actionTypes.initialShowLoad,
});
export const addShowToFav = () => ({
  type: actionTypes.addShowToFav,
});
export const editShow = () => ({
  type: actionTypes.editShow,
});
export const createNewShow = () => ({
  type: actionTypes.createNewShow,
});
