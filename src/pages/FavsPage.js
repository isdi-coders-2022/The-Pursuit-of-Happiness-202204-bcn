import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import FormCreate from "../components/FormCreate/FormCreate";
import Header from "../components/Header/Header";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

const FavsPage = () => {
  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
        <FormCreate />
        <Footer />
      </StyledMainContainerComponent>
    </>
  );
};

export default FavsPage;
