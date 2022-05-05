import { useContext, useEffect } from "react";
import styled from "styled-components";
import { showLoader } from "../../store/actions/showsActionCreator";

import ShowsContext from "../../store/context/ShowsContext";
import TvShowMobile from "../TvShowMobile/TvShowMobile";

const StyledShowsComponent = styled.div`
  border: 2px solid yellow;
  height: 75vh;
  margin: 0;
  color: white;
`;

const ShowContainer = () => {
  const { state, dispatch } = useContext(ShowsContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const showsData = await response.json();

      dispatch(showLoader(showsData));
    })();
  }, [dispatch]);

  return (
    <StyledShowsComponent>
      {state.map((show) => (
        <TvShowMobile
          name={show.name}
          posterURL={show.image.medium}
          year={show.premiered}
          genre={show.genres[0]}
          rating={show.rating.average}
        ></TvShowMobile>
      ))}
    </StyledShowsComponent>
  );
};

export default ShowContainer;
