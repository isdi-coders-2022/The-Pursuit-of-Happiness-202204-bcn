import styled from "styled-components";
import StarRating from "../StarRating/StarRating";
import BookmarkIcon from "../BookmarkIcon/BookmarIcon";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;
`;

const TvShowMobile = ({ name, year, rating, genre, posterURL, showId }) => {
  return (
    <>
      <StyledShowComponent>
        <div className="tvShowMobileDetail__container">
          <div className="tvShowMobileDetail__poster">
            <img src={posterURL} alt={name} />
            <p>{name}</p>
            <p>{year}</p>
          </div>
          <BookmarkIcon id={showId}></BookmarkIcon>
          <div className="tvShowMobileDetail_content">
            <StarRating rating={rating}></StarRating>
          </div>
          <p>{genre}</p>
        </div>
        <div></div>
      </StyledShowComponent>
    </>
  );
};

export default TvShowMobile;
