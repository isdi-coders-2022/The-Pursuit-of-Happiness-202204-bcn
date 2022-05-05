import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const StyledMainContainerComponent = styled.div`
  height: 100vh;
`;

const DetailPage = () => {
  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
        <Navbar />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default DetailPage;
