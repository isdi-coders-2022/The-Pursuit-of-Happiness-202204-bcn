import styled from "styled-components";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import TvShowDetail from "../components/TvShowDetail/TvShowDetail";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

const DetailPage = () => {
  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
        <Navbar />
        <TvShowDetail />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default DetailPage;
