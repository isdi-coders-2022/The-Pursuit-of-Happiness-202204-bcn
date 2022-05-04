import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledArrowComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .arrowLeft {
    background-color: rgb(58, 63, 71, 1);
    padding: 4px;
    border-radius: 4px;
    font-size: 22px;
  }
`;

const ArrowButton = () => {
  return (
    <StyledArrowComponent>
      <FontAwesomeIcon
        data-testid="arrowLeftTestId"
        className="arrowLeft"
        icon={faArrowLeft}
      />
    </StyledArrowComponent>
  );
};

export default ArrowButton;
