import { useCallback, useContext } from "react";
import { showLoader } from "../actions/showsActionCreator";
import ShowsContext from "../context/ShowsContext";

const useData = () => {
  const { dispatch } = useContext(ShowsContext);

  const publicApiUrl = "https://api.tvmaze.com/shows";
  const privateApiUrl = "https://tvshows-api.onrender.com/tvshow/";

  const loadNewChars = useCallback(() => {
    (async () => {
      const response = await fetch(publicApiUrl);
      const showsData = await response.json();

      let reducedData = [];
      for (let i = 0; i <= 8; i++) {
        reducedData.push(showsData[i]);
      }
      dispatch(showLoader(reducedData));
    })();
  }, [dispatch]);

  return { loadNewChars };
};

export default useData;
