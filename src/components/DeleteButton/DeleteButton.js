import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useData from "../../store/hooks/useData";

const StyledBookmarkComponent = styled.div`
  color: rgba(198, 0, 0, 0.6);

  div div {
    background: none;
    background-color: none;
  }
  .deleteIcon {
    font-size: 25px;
    background: rgba(226, 182, 22, 1);
    border-radius: 60%;
    animation: shake 0.8s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -1px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 1px) rotate(-1deg);
    }
    60% {
      transform: translate(-2px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -1px) rotate(-1deg);
    }
  }
`;

const DeleteButton = (showId) => {
  const { deleteToApiFav } = useData();

  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon
        onClick={(event) => {
          event.preventDefault();
          deleteToApiFav(showId);
        }}
        id={showId}
        data-testid="FaxMarkXCircle"
        icon={faXmarkCircle}
        className="deleteIcon"
      />
    </StyledBookmarkComponent>
  );
};

export default DeleteButton;
