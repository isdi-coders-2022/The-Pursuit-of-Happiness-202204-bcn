import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Bookmark from "../Bookmark/Bookmark";
import DeleteButton from "../DeleteButton/DeleteButton";
import StarRating from "../StarRating/StarRating";

const StyledShowComponent = styled.div`
  color: white;
  display: flex;
  margin-top: 20px;
  font-size: 20px;
  background-color: #242a32;
  img {
    border-radius: 44px;
    border: 2px solid;
  }
  form {
    left: 50%;
    position: absolute;
    top: 10%;
  }
  .title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;

    width: 100%;
    left: 20%;
    position: relative;
  }
  .year {
    font-size: 12px;
    position: relative;
    right: -159%;
    top: -18%;
  }
  .tvShowMobil__container {
    display: flex;
    flex-direction: row;
  }
  .tvShowMobile__block1 {
    align-items: flex-end;
    width: 165px;
    margin-right: 60px;
    width: 177px;
  }
  .tvShowMobile__block2 {
    width: 110px;
    display: flex;
    font-size: 16px;
  }
  .tvShowMobile__block3 {
    margin-top: 235px;

    align-items: flex-start;
  }
  .genre {
    font-size: 18px;
    color: rgba(226, 182, 22, 1);
    display: flex;
  }
  .Bookmarkfix div {
    background: none;
    top: -9px;
    right: 100px;
    position: relative;

    opacity: 70%;
  }
`;

const TvShowMobile = ({ name, year, rating, genre, posterURL, showId }) => {
  const currentRoute = useLocation();

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
            <div className="Bookmarkfix">
              {currentRoute.pathname === "/homepage" ? (
                <Bookmark>id={showId}</Bookmark>
              ) : (
                <DeleteButton>id={showId}</DeleteButton>
              )}
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
