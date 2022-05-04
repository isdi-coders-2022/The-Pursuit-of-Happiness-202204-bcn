import { render, screen } from "@testing-library/react";
import ArrowButtonLeft from "./ArrowButtonLeft";

describe("Given ArrowButton component", () => {
  describe("When it's called", () => {
    test("Then it should render a element with id 'arrowLeftTestId'", () => {
      render(<ArrowButtonLeft />);
      const arrowButton = screen.getByTestId("arrowLeftTestId");

      expect(arrowButton).toBeTruthy();
    });
  });
});
