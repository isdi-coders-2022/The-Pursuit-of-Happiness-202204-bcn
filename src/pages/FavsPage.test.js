import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FavsPage from "./FavsPage";

describe("Given a FavsPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'WAS!'", () => {
      const expectedText = "WAS!";

      render(
        <BrowserRouter>
          <FavsPage />
        </BrowserRouter>
      );
      const expectedRenderedHeading = screen.getByRole("heading", { level: 1 });

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });
});
