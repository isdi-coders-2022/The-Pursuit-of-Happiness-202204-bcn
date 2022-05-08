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
    font-size: 35px;
    background: rgba(226, 182, 22, 1);
    border-radius: 60%;
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
