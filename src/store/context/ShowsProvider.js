import { useReducer } from "react";

import showListReducer from "../reducer/showListReducer";
import ShowsContext from "./ShowsContext";

const ShowsProvider = ({ children }) => {
  const initialLoad = [];

  const [state, dispatch] = useReducer(showListReducer, initialLoad);

  return (
    <ShowsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
