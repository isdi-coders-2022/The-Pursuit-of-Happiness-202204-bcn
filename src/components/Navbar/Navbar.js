import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbarComponenent = styled.div`
  color: black;
  display: flex;
  h2 {
    font-size: 22px;
    color: white;
  }
`;

const Navbar = ({ homeText, favText }) => {
  return (
    <StyledNavbarComponenent className="col-8">
      <NavLink to="/HomePage">
        <h2 className="col-6">{homeText}</h2>
      </NavLink>
      <NavLink to="/FavsPage">
        <h2 className="col-6">{favText}</h2>
      </NavLink>
    </StyledNavbarComponenent>
  );
};

export default Navbar;
