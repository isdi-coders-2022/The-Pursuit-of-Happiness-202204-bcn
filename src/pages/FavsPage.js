import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import FormCreate from "../components/FormCreate/FormCreate";
import Header from "../components/Header/Header";
import ShowContainer from "../components/ShowsContainer/ShowContainer";
import ShowsContext from "../store/context/ShowsContext";
import useData from "../store/hooks/getData";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
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
        <ShowContainer pageKey={"fav"} state={state} className="w-100" />
        <FormCreate />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default FavsPage;
