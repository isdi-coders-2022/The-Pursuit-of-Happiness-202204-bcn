import styled from "styled-components";
import ArrowButtonLeft from "../ArrowButton/ArrowButtonLeft";
import ArrowButtonRight from "../ArrowButtonRight/ArrowButtonRight";

const StyledFooterComponent = styled.div`
  height: 10vh;
  visibility: hidden;
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
