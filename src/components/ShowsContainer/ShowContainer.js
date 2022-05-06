import styled from "styled-components";
import shortid from "shortid";
import TvShowMobile from "../TvShowMobile/TvShowMobile";

const StyledShowsComponent = styled.div`
  height: 75vh;
  margin: 0;
  color: white;
`;
// const generateKey = (pre) => {
//   return `${pre}_${new Date().getTime().toLocaleString()}`;
// };

const ShowContainer = ({ state, pageKey }) => {
  return (
    <StyledShowsComponent>
      {state.map((show) => (
        <div key={shortid.generate()}>
          <TvShowMobile
            showId={show.id}
            key={shortid.generate()}
            name={show.name}
            posterURL={show.image.medium}
            year={show.premiered}
            genre={show.genres[0]}
            rating={show.rating.average}
          ></TvShowMobile>
        </div>
      ))}
    </StyledShowsComponent>
  );
};

export default ShowContainer;
