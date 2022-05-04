import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledArrowComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .arrowRight {
    background-color: rgb(58, 63, 71, 1);
    padding: 4px;
    border-radius: 4px;
    font-size: 22px;
  }
`;

const ArrowButtonRight = () => {
  return (
    <StyledArrowComponent>
      <FontAwesomeIcon
        data-testid="arrowRightTestId"
        className="arrowRight"
        icon={faArrowRight}
      />
    </StyledArrowComponent>
  );
};

export default ArrowButtonRight;
