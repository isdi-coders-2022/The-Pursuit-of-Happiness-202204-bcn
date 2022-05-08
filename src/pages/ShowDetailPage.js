import { useContext } from "react";
import ShowsContext from "../store/context/ShowsContext";
import TvShowMobileDetail from "../components/TvShowMobileDetail/TvShowMobileDetail";
import { useSearchParams } from "react-router-dom";

const ShowDetailPage = () => {
  const { state } = useContext(ShowsContext);
  const [searchParams] = useSearchParams();
  const paramsShowId = searchParams.get("id");

  return (
    <>
      <TvShowMobileDetail
        showId={paramsShowId}
        pageKey={"detail"}
        state={state}
        className="w-100"
      />
    </>
  );
};

export default ShowDetailPage;
