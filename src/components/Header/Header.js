import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const StyledHeaderComponent = styled.div`
  color: white;
  display: flex;

  .logoSign {
    color: rgba(226, 182, 22, 1);
  }
`;

const Header = () => {
  return (
    <StyledHeaderComponent>
      <h1>
        WAS<span className="logoSign">!</span>
      </h1>
      <Navbar homeText="Home" favText="Favorites" />
    </StyledHeaderComponent>
  );
};
export default Header;