import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";
import ShowsContext from "../../store/context/ShowsContext";

const StyledBookmarkComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  .bookmarkIcon {
    font-size: 40px;
    background: none;
  }
`;

const BookmarkIcon = (showId) => {
  const { state } = useContext(ShowsContext);

  const addToFavList = () => {
    const showsToFilter = state.find((show) => {
      return show.id === showId.id;
    });
    const showsFiltered = { ...showsToFilter };

    (async () => {
      const idToJson = JSON.stringify({ ...showsFiltered });

      // eslint-disable-next-line no-unused-vars
      const response = await fetch("https://tvshows-api.onrender.com/tvshow/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: idToJson,
      });
    })();
  };

  return (
    <StyledBookmarkComponent>
      <FontAwesomeIcon
        data-testid="bookmarkTestId"
        onClick={addToFavList}
        id={showId}
        icon={faBookmark}
        className="bookmarkIcon"
      />
    </StyledBookmarkComponent>
  );
};

export default BookmarkIcon;
