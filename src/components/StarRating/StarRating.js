import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledStarRatingComponent = styled.div`
  color: rgba(226, 182, 22, 1);
  text-align: center;
  .star {
    font-size: 30px;
  }
`;

const StarRating = ({ rating }) => {
  return (
    <StyledStarRatingComponent>
      <FontAwesomeIcon
        data-testid="starTestId"
        className="star"
        icon={faStar}
      />
      <p>{rating}</p>
    </StyledStarRatingComponent>
  );
};

export default StarRating;
