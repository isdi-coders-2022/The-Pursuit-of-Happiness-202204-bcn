import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbarComponenent = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;

  h2 {
    font-size: 22px;
    color: white;
  }
  a {
    text-decoration: none;
  }
`;

const Navbar = ({ homeText, favText }) => {
  return (
    <StyledNavbarComponenent className="col-8">
      <NavLink to="/homepage">
        <h2 className="col-6">{homeText}</h2>
      </NavLink>
      <NavLink to="/favspage">
        <h2 className="col-6">{favText}</h2>
      </NavLink>
    </StyledNavbarComponenent>
  );
};

export default Navbar;
