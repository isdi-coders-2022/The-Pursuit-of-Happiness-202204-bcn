import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <StyledMainContainerComponent className="container">
      <Header />
      <Navbar />
      <Footer />
    </StyledMainContainerComponent>
  );
};

export default HomePage;
