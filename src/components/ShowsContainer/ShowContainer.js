import styled from "styled-components";
import BookmarkIcon from "../BookmarkIcon/BookmarIcon";
import TvShowMobile from "../TvShowMobile/TvShowMobile";

const StyledShowsComponent = styled.div`
  border: 2px solid yellow;
  height: 75vh;
  margin: 0;
  color: white;
`;

const ShowContainer = ({ state }) => {
  return (
    <StyledShowsComponent>
      {state.map((show) => (
        <>
          <BookmarkIcon id={show.id}></BookmarkIcon>
          <TvShowMobile
            key={show.name + show.id}
            name={show.name}
            posterURL={show.image.medium}
            year={show.premiered}
            genre={show.genres[0]}
            rating={show.rating.average}
          ></TvShowMobile>
        </>
      ))}
    </StyledShowsComponent>
  );
};

export default ShowContainer;
