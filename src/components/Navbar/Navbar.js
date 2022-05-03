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
      <h2 className="col-6">{homeText}</h2>
      <h2 className="col-6">{favText}</h2>
    </StyledNavbarComponenent>
  );
};

export default Navbar;
