import { useEffect, useReducer } from "react";
import { loadShows } from "../actions/showsActionCreator";
import showListReducer from "../reducer/showsReducer";
import ShowsContext from "./ShowsContext";

const ShowsProvider = ({ children }) => {
  const initialLoad = [];

  const [state, showsDispatch] = useReducer(showListReducer, initialLoad);

  useEffect(() => {
    (async () => {
      const fetchedShows = await fetch("https://api.tvmaze.com/shows/1");
      let response = await fetchedShows.json();

      showsDispatch(loadShows(response));
    })();
  }, []);

  return (
    <ShowsContext.Provider value={{ state, showsDispatch }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
