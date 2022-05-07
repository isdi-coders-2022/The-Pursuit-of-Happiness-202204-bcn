import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShowContainer from "../components/ShowsContainer/ShowContainer";
import { useContext, useEffect } from "react";
import ShowsContext from "../store/context/ShowsContext";
import { showLoader } from "../store/actions/showsActionCreator";
import useData from "../store/hooks/getData";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
  margin: 0;
`;

const HomePage = () => {
  const { state } = useContext(ShowsContext);
  const { loadNewChars } = useData();

  useEffect(() => {
    loadNewChars();
  }, [loadNewChars]);

  return (
    <StyledMainContainerComponent className="container">
      <Header />
      <div className="row">
        <ShowContainer pageKey={"home"} state={state} className="w-100" />
      </div>
      <Footer />
    </StyledMainContainerComponent>
  );
};

export default HomePage;
