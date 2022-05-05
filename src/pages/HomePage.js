import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShowContainer from "../components/ShowsContainer/ShowContainer";
import { useContext, useEffect } from "react";
import ShowsContext from "../store/context/ShowsContext";
import { showLoader } from "../store/actions/showsActionCreator";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
  margin: 0;
`;

const HomePage = () => {
  const { state, dispatch } = useContext(ShowsContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const showsData = await response.json();
      let reducedData = [];
      for (let i = 0; i <= 8; i++) {
        reducedData.push(showsData[i]);
      }
      dispatch(showLoader(reducedData));
    })();
  }, [dispatch]);

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
