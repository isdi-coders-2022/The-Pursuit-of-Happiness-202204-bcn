import { useCallback, useContext } from "react";
import { favLoader, showLoader } from "../actions/showsActionCreator";
import ShowsContext from "../context/ShowsContext";

const useData = () => {
  const { state, dispatch } = useContext(ShowsContext);

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

  const loadFavShows = useCallback(() => {
    (async () => {
      const response = await fetch(privateApiUrl);
      const favsData = await response.json();
      dispatch(favLoader(favsData));
    })();
  }, [dispatch]);

  const addToApiFav = (showId) => {
    const showsToFilter = state.find((show) => {
      return show.id === showId.children[1];
    });
    const showsFiltered = { ...showsToFilter };

    (async () => {
      const idToJson = JSON.stringify({ ...showsFiltered });

      await fetch(privateApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: idToJson,
      });
    })();
  };
  const deleteToApiFav = (showId) => {
    const showsToFilter = state.find((show) => {
      return show.id === showId.children[1];
    });
    const showsFiltered = { ...showsToFilter };

    (async () => {
      const idToJson = JSON.stringify({ ...showsFiltered });

      await fetch(privateApiUrl + "/" + showId.children[1], {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: idToJson,
      });
    })();
  };

  return { loadNewChars, loadFavShows, addToApiFav, deleteToApiFav };
};

export default useData;
