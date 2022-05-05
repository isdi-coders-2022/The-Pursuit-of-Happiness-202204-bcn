import { render, screen } from "@testing-library/react";
import FormCreate from "./FormCreate";

describe("Given a FormCreate component", () => {
  describe("When it's called", () => {
    test("Then it should render a button to submit", () => {
      render(<FormCreate />);
      const expectButton = screen.getByRole("button");

      expect(expectButton).toBeInTheDocument();
    });
  });
});
