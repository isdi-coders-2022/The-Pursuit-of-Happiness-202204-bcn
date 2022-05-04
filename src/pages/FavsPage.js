import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

const FavsPage = () => {
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

export default FavsPage;
