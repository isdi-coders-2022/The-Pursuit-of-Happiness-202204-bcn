import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledBookmarkComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .bookmarkIcon {
    background-color: rgb(58, 63, 71, 1);
    padding: 4px;
    border-radius: 4px;
    font-size: 30px;
  }
`;

const BookmarkIcon = () => {
  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon icon={faBookmark} className="bookmarkIcon" />
    </StyledBookmarkComponent>
  );
};

export default BookmarkIcon;
