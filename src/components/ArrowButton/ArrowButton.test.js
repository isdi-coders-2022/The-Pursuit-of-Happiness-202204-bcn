import { render, screen } from "@testing-library/react";
import ArrowButton from "./ArrowButton";

describe("Given ArrowButton component", () => {
  describe("When it's called", () => {
    test("Then it should render a element with id 'arrowLeftTestId'", () => {
      render(<ArrowButton />);
      const arrowButton = screen.getByTestId("arrowLeftTestId");

      expect(arrowButton).toBeTruthy();
    });
  });
});
