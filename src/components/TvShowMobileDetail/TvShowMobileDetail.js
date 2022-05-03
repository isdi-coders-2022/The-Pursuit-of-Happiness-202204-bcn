import styled from "styled-components";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;
`;

const TvShowMobileDetail = ({ name, year, rating, genre, posterURL }) => {
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
            <img src="img/star.png" alt="Rating star" />
          </div>
          <i />
          <p>{genre}</p>
          <p>{rating}</p>
        </div>
      </StyledShowComponent>
    </>
  );
};

export default TvShowMobileDetail;
