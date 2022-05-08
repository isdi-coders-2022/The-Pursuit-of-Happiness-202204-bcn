import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Bookmark from "../Bookmark/Bookmark";
import DeleteButton from "../DeleteButton/DeleteButton";
import StarRating from "../StarRating/StarRating";
import { NavLink } from "react-router-dom";

const StyledShowComponent = styled.div`
  display: flex;
  color: white;
  margin-top: 30px;
  font-size: 20px;
  padding: 0;

  img {
    max-width: 210px;
    max-height: 295px;
    border-radius: 16px;
    border: 2px solid;
  }

  .info {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-left: 25px;

    &__title {
      font-size: 26px;
      padding: 0;
      margin: 0;
    }
    &__year {
      padding: 0;
      margin-bottom: 10px;
      font-size: 16px;
    }
    &__genre {
      margin-bottom: -4px;
      align-self: center;
      color: rgba(226, 182, 22, 1);
      padding: 4px;
    }
  }
  .icon {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__star {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 60px;
    }
  }
`;

const TvShowMobile = ({ name, year, rating, genre, posterURL, showId }) => {
  const currentRoute = useLocation();
  const showIdToProcess = "/detailpage/" + showId;

  return (
    <>

      <StyledShowComponent className="container">
        <div className="image row">
          <div className="info col-8">
            <NavLink to={showIdToProcess}>
            <img width={206} height={291} src={posterURL} alt={name} />
               </NavLink>
            <p className="info__genre">{genre}</p>
            <p className="info__title">{name}</p>
            <p className="info__year">{year}</p>

          </div>
          <div className="icon col-2">
            <div>
              {currentRoute.pathname === "/homepage" ? (
                <Bookmark>id={showId}</Bookmark>
              ) : (
                <DeleteButton>id={showId}</DeleteButton>
              )}
            </div>
            <div className="icon__star">
              <StarRating rating={rating}></StarRating>
            </div>
          </div>
        </div>
      </StyledShowComponent>
    </>
  );
};

export default TvShowMobile;
