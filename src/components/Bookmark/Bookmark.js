import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useData from "../../store/hooks/useData";

const StyledBookmarkComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .bookmarkIcon {
    font-size: 40px;
    background: none;
  }
`;

const Bookmark = (showId) => {
  const { addToApiFav } = useData();
  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon
        onClick={(event) => {
          event.preventDefault();
          addToApiFav(showId);
        }}
        id={showId}
        icon={faBookmark}
        className="bookmarkIcon"
      />
    </StyledBookmarkComponent>
  );
};

export default Bookmark;
