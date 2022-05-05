import styled from "styled-components";
import StarRating from "../StarRating/StarRating";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;

  .tvShowMobileDetail__container {
    height: 378px;
    padding: 20px;
    border: 2px solid white;
    width: 100%;
  }
  .tvShowMobileDetail__poster {
    height: 100%;
  }
`;

const TvShowDetail = ({ name, year, rating, genre, posterURL }) => {
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

export default TvShowDetail;
