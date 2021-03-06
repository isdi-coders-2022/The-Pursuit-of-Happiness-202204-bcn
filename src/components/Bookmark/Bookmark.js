import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import useData from "../../store/hooks/useData";

const StyledBookmarkComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  background: none;

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
        data-testid="faBookmark"
        className="bookmarkIcon"
        swapOpacity
      />
    </StyledBookmarkComponent>
  );
};

export default Bookmark;
