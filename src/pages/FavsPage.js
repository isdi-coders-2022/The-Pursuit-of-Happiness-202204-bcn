import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import FormCreate from "../components/FormCreate/FormCreate";
import Header from "../components/Header/Header";
import ShowContainer from "../components/ShowsContainer/ShowContainer";
import { favLoader } from "../store/actions/showsActionCreator";
import ShowsContext from "../store/context/ShowsContext";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
`;

const FavsPage = () => {
  const { state, dispatch } = useContext(ShowsContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://tvshows-api.onrender.com/tvshow");
      const showsData = await response.json();
      dispatch(favLoader(showsData));
    })();
  }, [dispatch]);

  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
        <ShowContainer state={state} className="w-100" />
        <FormCreate />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default FavsPage;
