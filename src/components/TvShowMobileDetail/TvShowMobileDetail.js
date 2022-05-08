import { useContext } from "react";
import ShowsContext from "../../store/context/ShowsContext";

const TvShowMobileDetail = ({ showId }) => {
  const { state } = useContext(ShowsContext);

  const showToShow = state.find((show) => {
    return show.id.toString() === showId;
  });

  return (
    <>
      <p data-testid="tvShowDetail" className="title">
        {showId}
      </p>
      <p className="year">{showId}</p>
    </>
  );
};

export default TvShowMobileDetail;
