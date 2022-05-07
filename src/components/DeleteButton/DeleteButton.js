import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useData from "../../store/hooks/useData";

const StyledBookmarkComponent = styled.div`
  color: rgba(198, 0, 0, 0.6);
  .deleteIcon {
    font-size: 40px;
    background: rgba(226, 182, 22, 1);
    border-radius: 60%;
  }
`;

const DeleteButton = (showId) => {
  const { addToApiFav } = useData();
  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon
        onClick={(event) => {
          event.preventDefault();
          addToApiFav(showId);
        }}
        id={showId}
        icon={faXmarkCircle}
        className="deleteIcon"
      />
    </StyledBookmarkComponent>
  );
};

export default DeleteButton;
