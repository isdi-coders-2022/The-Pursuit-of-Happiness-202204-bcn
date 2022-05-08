import useData from "../store/hooks/useData";
import { useEffect, useContext } from "react";
import ShowsContext from "../store/context/ShowsContext";
import ShowsContainer from "../components/ShowsContainer/ShowsContainer";
import TvShowMobileDetail from "../components/TvShowMobileDetail/TvShowMobileDetail";

const ShowDetailPage = () => {
  const { state } = useContext(ShowsContext);
  const { loadShowById } = useData();

  useEffect(() => {
    loadShowById();
  }, [loadShowById]);

  return (
    <>
      <TvShowMobileDetail pageKey={"detail"} state={state} className="w-100" />
    </>
  );
};

export default ShowDetailPage;
