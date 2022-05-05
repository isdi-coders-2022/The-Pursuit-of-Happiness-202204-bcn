import styled from "styled-components";

import TvShowMobile from "../TvShowMobile/TvShowMobile";

const StyledShowsComponent = styled.div`
  height: 75vh;
  margin: 0;
  color: white;
`;

const ShowContainer = ({ state, pageKey }) => {
  return (
    <StyledShowsComponent>
      {state.map((show) => (
        <>
          <TvShowMobile
            showId={show.id}
            key={pageKey + show.id}
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
