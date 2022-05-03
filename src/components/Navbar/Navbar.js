import styled from "styled-components";

const StyledNavbarComponenent = styled.div`
  color: black;
  display: flex;
  h2 {
    font-size: 22px;
    color: white;
  }
`;

const Navbar = ({ homeText, favText, className }) => {
  return (
    <StyledNavbarComponenent>
      <h2 className={className}>{homeText}</h2>
      <h2 className={className}>{favText}</h2>
    </StyledNavbarComponenent>
  );
};

export default Navbar;
