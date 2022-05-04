import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given footer component", () => {
  describe("When it's called", () => {
    test("Then it should show a container", () => {
      render(<Footer />);
      const arrowButton = screen.getByTestId("arrowLeftTestId");

      expect(arrowButton).toBeTruthy();
    });
  });
});
