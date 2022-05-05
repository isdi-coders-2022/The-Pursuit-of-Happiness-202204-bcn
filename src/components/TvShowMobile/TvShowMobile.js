import styled from "styled-components";
import StarRating from "../StarRating/StarRating";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;
`;

const TvShowMobile = ({ name, year, rating, genre, posterURL }) => {
  return (
    <>
      <StyledShowComponent>
        <div className="tvShowMobileDetail__container">
          <div className="tvShowMobileDetail__poster">
            <img src={posterURL} alt={name} />
            <p>{name}</p>
            <p>{year}</p>
          </div>
          <div className="tvShowMobileDetail_content">
            <StarRating rating={rating}></StarRating>
          </div>
          <p>{genre}</p>
        </div>
      </StyledShowComponent>
    </>
  );
};

export default TvShowMobile;
