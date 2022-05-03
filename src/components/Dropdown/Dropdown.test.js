import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Given a Dropdown component", () => {
  describe("When it receives an array with the word 'Action'", () => {
    test("Then it should render a form with 1 option with the word 'Action'", () => {
      const genreArray = ["Action"];
      const expectedText = "Action";

      render(<Dropdown genres={genreArray} />);
      const expectedOptionRendered = screen.getByRole("option");

      expect(expectedOptionRendered).toHaveTextContent(expectedText);
    });
  });
});
