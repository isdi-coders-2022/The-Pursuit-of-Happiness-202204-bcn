import { render, screen } from "@testing-library/react";
import ArrowButtonRight from "./ArrowButonRight";

describe("Given ArrowButton component", () => {
  describe("When it's called", () => {
    test("Then it should render a element with id 'arrowRightTestId'", () => {
      render(<ArrowButtonRight />);
      const arrowButton = screen.getByTestId("arrowRightTestId");

      expect(arrowButton).toBeTruthy();
    });
  });
});
