import { render, screen } from "@testing-library/react";
import ShowsProvider from "../../store/context/ShowsProvider";
import Bookmark from "./Bookmark";

describe("Given a Bookmark component", () => {
  describe("When its called", () => {
    test("Then it should render an icon with id 'faBookmark'", () => {
      render(
        <ShowsProvider>
          <Bookmark></Bookmark>
        </ShowsProvider>
      );

      const deleteButtonExpected = screen.getByTestId("faBookmark");

      expect(deleteButtonExpected).toBeInTheDocument();
    });
  });
});
