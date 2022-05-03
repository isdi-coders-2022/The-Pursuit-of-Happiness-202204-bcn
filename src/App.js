import Header from "./components/Header/Header";
import styled from "styled-components";

const StyledMainContainerComponent = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

function App() {
  return (
    <>
      <StyledMainContainerComponent className="container">
        <Header />
      </StyledMainContainerComponent>
    </>
  );
}

export default App;
