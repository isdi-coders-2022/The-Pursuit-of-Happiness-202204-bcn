import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShowsProvider from "../store/context/ShowsProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'WAS!'", () => {
      const expectedText = "WAS!";

      render(
        <ShowsProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </ShowsProvider>
      );
      const expectedRenderedHeading = screen.getByRole("heading", { level: 1 });

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });
});
