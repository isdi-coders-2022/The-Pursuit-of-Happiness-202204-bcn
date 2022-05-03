import StarRating from "./StarRating";
import { render, screen } from "@testing-library/react";

describe("Given StarRating component", () => {
  describe("When it's called", () => {
    test("Then it should render an icon with id 'starTestId'", () => {
      render(<StarRating />);
      const starIcon = screen.getByTestId("starTestId");

      expect(starIcon).toBeTruthy();
    });
  });
});
