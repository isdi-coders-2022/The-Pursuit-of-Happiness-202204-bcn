import { useEffect, useContext } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import FormCreate from "../components/FormCreate/FormCreate";
import Header from "../components/Header/Header";
import ShowsContainer from "../components/ShowsContainer/ShowsContainer";
import ShowsContext from "../store/context/ShowsContext";
import useData from "../store/hooks/useData";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
  background-color: #242a32;
`;

const FavsPage = () => {
  const { state } = useContext(ShowsContext);
  const { loadFavShows } = useData();

  useEffect(() => {
    loadFavShows();
  }, [loadFavShows]);

  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
        <ShowsContainer pageKey={"fav"} state={state} className="w-100" />
        <FormCreate />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default FavsPage;
