import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'WAS!'", () => {
      const expectedText = "WAS!";

      render(<Header />);
      const expectedRenderedHeading = screen.getByRole("heading", { level: 1 });

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });
});
