import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Given Navbar function", () => {
  describe("When it's called with to word given", () => {
    test("Then it should render two headings", () => {
      const textHome = "Home";
      const textFavorites = "Favorites";

      render(<Navbar homeText={textHome} favText={textFavorites} />);

      const expectedNavbarText = screen.getAllByRole("heading");

      expect(expectedNavbarText).toHaveLength(2);
    });
  });
});
