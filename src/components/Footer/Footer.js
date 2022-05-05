import styled from "styled-components";
import ArrowButtonLeft from "../ArrowButton/ArrowButtonLeft";
import ArrowButtonRight from "../ArrowButtonRight/ArrowButtonRight";

const StyledFooterComponent = styled.div`
  border: 2px solid red;
  height: 10vh;
`;

const Footer = () => {
  return (
    <StyledFooterComponent className="fixed-bottom">
      <ArrowButtonLeft />
      <ArrowButtonRight />
    </StyledFooterComponent>
  );
};

export default Footer;
