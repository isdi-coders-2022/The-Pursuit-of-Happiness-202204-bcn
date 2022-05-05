import styled from "styled-components";
import StarRating from "../StarRating/StarRating";
import BookmarkIcon from "../BookmarkIcon/BookmarIcon";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;
  margin-top: 20px;
  font-size: 20px;

  .title {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 600;
  }
  .year {
    margin-top: -10px;
  }
  .tvShowMobil__container {
    display: flex;
    flex-direction: row;
    width: 200px;
  }
  .tvShowMobile__block1 {
    align-items: flex-end;
    width: 200px;
    margin-right: 60px;
  }
  .tvShowMobile__block2 {
    width: 110px;
    display: flex;
  }
  .tvShowMobile__block3 {
    margin-top: 270px;
    margin-left: 120px;
    align-items: flex-start;
  }
  .genre {
    font-size: 18px;
    color: rgba(226, 182, 22, 1);
    display: flex;
  }
  .bookmarkfix {
    margin-left: 45px;
  }
`;

const TvShowMobile = ({ name, year, rating, genre, posterURL, showId }) => {
  return (
    <>
      <StyledShowComponent>
        <div className="tvShowMobil__container">
          <div className="tvShowMobile__block1">
            <img src={posterURL} alt={name} />
            <p className="title">{name}</p>
            <p className="year">{year}</p>
          </div>
          <div className="tvShowMobile__block2">
            <StarRating rating={rating}></StarRating>
            <div className="bookmarkfix">
              <BookmarkIcon id={showId}></BookmarkIcon>
            </div>
          </div>
          <div className="tvShowMobile__block3"></div>
        </div>
        <div className="tvShowMobile__block3">
          <p className="genre">{genre}</p>
        </div>
      </StyledShowComponent>
    </>
  );
};

export default TvShowMobile;
