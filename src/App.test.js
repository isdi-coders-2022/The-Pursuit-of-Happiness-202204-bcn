import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";

describe("Given app component", () => {
  describe("When it's called", () => {
    test("Then it show a component with the text 'WAS!'", () => {
      const testHeading = "WAS!";
      const history = createMemoryHistory();

      render(
        <BrowserRouter location={history.location} navigator={history}>
          <App />
        </BrowserRouter>
      );
      const headingInDocument = screen.getByRole("heading", { level: 1 });

      expect(headingInDocument).toHaveTextContent(testHeading);
    });
  });
});
