import { useContext } from "react";
import styled from "styled-components";
import ShowsContext from "../../store/context/ShowsContext";
import StarRating from "../StarRating/StarRating";

const StyledShow = styled.div`
  display: flex;
  color: white;
  margin-top: 30px;
  font-size: 16px;
  padding: 0;
  text-align: justify;

  .summary-title {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
  }

  .icon__star {
    margin: auto;
    top: 26px;
    position: relative;
  }
  .detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
  }
  p {
    align-self: flex-start;
  }
  .detail-info {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 136px;
  }

  .show-detail {
    position: relative;
    left: -229px;
    top: -92px;
  }
  img {
    border-radius: 45px;
    border: solid 2px white;
  }
`;

const TvShowMobileDetail = ({ showId }) => {
  const { state } = useContext(ShowsContext);

  const showToShow = state.find((show) => {
    return show.id.toString() === showId;
  });

  const summaryFormatted = showToShow.summary
    .replace("<p>", "")
    .replace("<b>", "")
    .replace("</b>", "")
    .replace("</p>", "");
  return (
    <>
      <StyledShow>
        <div className="detail-container">
          <h3 data-testid="tvShowDetail">Details</h3>
          <img
            width="100%"
            height="100%"
            src={showToShow.image.original}
            alt={showToShow.name}
          />
          <p className="summary-title">{showToShow.name}</p>
          {summaryFormatted}
          <div className="detail-info">
            <div className="icon__star">
              <StarRating rating={showToShow.rating.average}></StarRating>
              <p> {showToShow.genres[0]}</p>
            </div>
            <div className="show-detail">
              <p>Language: {showToShow.language}</p>
              <p>Date: {showToShow.premiered}</p>
              <p>Premiered: {showToShow.runtime}</p>
            </div>
          </div>
        </div>
      </StyledShow>
    </>
  );
};

export default TvShowMobileDetail;
