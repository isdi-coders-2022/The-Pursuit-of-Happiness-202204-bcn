// import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
// import { render, screen, whitin } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given app component", () => {
  describe("When it's called", () => {
    test("Then it show a component with the text 'WAS!'", () => {
      const testHeading = "WAS!";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const headingInDocument = screen.getByRole("heading", { level: 1 });

      expect(headingInDocument).toHaveTextContent(testHeading);
    });
  });
});
