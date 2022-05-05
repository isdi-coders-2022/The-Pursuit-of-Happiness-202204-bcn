import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledBookmarkComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .bookmarkIcon {
    font-size: 40px;
  }
`;

const BookmarkIcon = (showId) => {
  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon id={showId} icon={faBookmark} className="bookmarkIcon" />
    </StyledBookmarkComponent>
  );
};

export default BookmarkIcon;
