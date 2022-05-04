import styled from "styled-components";
import ArrowButton from "../ArrowButton/ArrowButton";

const StyledFooterComponent = styled.div`
  border: 2px solid red;
`;

const Footer = () => {
  return (
    <StyledFooterComponent className="fixed-bottom">
      <ArrowButton />
    </StyledFooterComponent>
  );
};

export default Footer;
