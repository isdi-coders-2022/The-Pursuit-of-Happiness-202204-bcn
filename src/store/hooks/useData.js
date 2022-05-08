import { useCallback, useContext } from "react";
import {
  favLoader,
  showLoader,
  showLoaderById,
} from "../actions/showsActionCreator";
import ShowsContext from "../context/ShowsContext";

const useData = () => {
  const publicApiUrl = "https://api.tvmaze.com/shows";
  const privateApiUrl = "https://tvshows-api.onrender.com/tvshow/";
  const publicApiUrlById = "https://tvshows-api.onrender.com/shows/";
  const { state, dispatch } = useContext(ShowsContext);

  const loadNewChars = useCallback(async () => {
    const response = await fetch(publicApiUrl);
    const showsData = await response.json();

    let reducedData = [];
    for (let i = 0; i <= 8; i++) {
      reducedData.push(showsData[i]);
    }
    dispatch(showLoader(reducedData));
    return showsData;
  }, [dispatch]);

  const loadShowById = useCallback(
    (showId) => {
      (async () => {
        const response = await fetch(publicApiUrlById + { showId });
        const showsData = await response.json();

        let reducedData = [];
        for (let i = 0; i <= 8; i++) {
          reducedData.push(showsData[i]);
        }
        dispatch(showLoaderById(reducedData));
      })();
    },
    [dispatch]
  );

  const loadFavShows = useCallback(async () => {
    const response = await fetch(privateApiUrl);
    const favsData = await response.json();
    dispatch(favLoader(favsData));
    return favsData;
  }, [dispatch]);

  const addToApiFav = async (showId) => {
    const showsToFilter = state.find((show) => {
      return show.id === showId.children[1];
    });
    const showsFiltered = { ...showsToFilter };

    const idToJson = JSON.stringify({ ...showsFiltered });

    const response = await fetch(privateApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: idToJson,
    });

    return response.json();
  };

  const deleteToApiFav = async (showId) => {
    const showsToFilter = state.find((show) => {
      return show.id === showId.children[1];
    });
    const showsFiltered = { ...showsToFilter };

    const idToJson = JSON.stringify({ ...showsFiltered });

    const response = await fetch(privateApiUrl + "/" + showId.children[1], {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: idToJson,
    });

    loadFavShows();
    return response.json();
  };

  return {
    loadNewChars,
    loadFavShows,
    addToApiFav,
    deleteToApiFav,
    loadShowById,
  };
};

export default useData;
