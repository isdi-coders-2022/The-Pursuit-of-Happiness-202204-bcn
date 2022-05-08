import { useContext } from "react";
import ShowsContext from "../store/context/ShowsContext";
import TvShowMobileDetail from "../components/TvShowMobileDetail/TvShowMobileDetail";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";

const ShowDetailPage = () => {
  const { state } = useContext(ShowsContext);
  const [searchParams] = useSearchParams();
  const paramsShowId = searchParams.get("id");

  return (
    <>
      <Header />
      <TvShowMobileDetail
        showId={paramsShowId}
        pageKey={"detail"}
        state={state}
      />
    </>
  );
};

export default ShowDetailPage;
