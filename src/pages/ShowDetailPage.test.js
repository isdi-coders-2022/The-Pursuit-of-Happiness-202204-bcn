import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShowsProvider from "../store/context/ShowsProvider";
import ShowDetailPage from "./ShowDetailPage";

describe("Given a ShowDetailPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with test-id: tvShowDetail'", () => {
      render(
        <ShowsProvider>
          <BrowserRouter>
            <ShowDetailPage />
          </BrowserRouter>
        </ShowsProvider>
      );
      const elemet = screen.getByTestId("tvShowDetail");

      expect(elemet).toBeInTheDocument();
    });
  });
});
