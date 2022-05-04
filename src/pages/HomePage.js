import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShowContainer from "../components/ShowsContainer/ShowContainer";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
  margin: 0;
`;

const HomePage = () => {
  return (
    <StyledMainContainerComponent className="container">
      <Header />
      <div className="row">
        <ShowContainer className="w-100" />
      </div>
      <Footer />
    </StyledMainContainerComponent>
  );
};

export default HomePage;
