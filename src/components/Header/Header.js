import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";

const genresList = ["Action", "Drama", "Comedy", "Horror"];

const StyledHeaderComponent = styled.div`
  color: white;
  height: 15vh;
  align-items: baseline;
  background-color: #242a32;
  .logoSign {
    color: rgba(226, 182, 22, 1);
  }
`;

const Header = () => {
  return (
    <StyledHeaderComponent className="row">
      <h1 className="text-center gy-3 col-4">
        WAS<span className="logoSign">!</span>
      </h1>
      <Navbar className="col-8" homeText="Home" favText="Favorites" />
      <div className="d-flex flex-row-reverse">
        <Dropdown genres={genresList} />
      </div>
    </StyledHeaderComponent>
  );
};
export default Header;
