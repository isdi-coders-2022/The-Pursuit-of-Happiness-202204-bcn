import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Given Navbar function", () => {
  describe("When it's called with to word given", () => {
    test("Then it should render two headings", () => {
      const textHome = "Home";
      const textFavorites = "Favorites";

      render(
        <BrowserRouter>
          <Navbar homeText={textHome} favText={textFavorites} />
        </BrowserRouter>
      );

      const expectedNavbarText = screen.getAllByRole("heading");

      expect(expectedNavbarText).toHaveLength(2);
    });
  });
  test("Then it should always match for this snapshot", () => {
    const navbarReceived = TestRenderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(navbarReceived).toMatchSnapshot();
  });
});
