import { useContext, useEffect } from "react";
import styled from "styled-components";
import { showLoader } from "../../store/actions/showsActionCreator";

import ShowsContext from "../../store/context/ShowsContext";

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
      const response = await fetch("https://api.tvmaze.com/shows/1");
      const showsData = await response.json();

      dispatch(showLoader(showsData));
    })();
  }, [dispatch]);

  return (
    <StyledShowsComponent>
      <div>{state.id}</div>
    </StyledShowsComponent>
  );
};

export default ShowContainer;
