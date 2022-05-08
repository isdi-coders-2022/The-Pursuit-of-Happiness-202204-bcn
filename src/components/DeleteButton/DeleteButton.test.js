import { render, screen } from "@testing-library/react";
import ShowsProvider from "../../store/context/ShowsProvider";
import DeleteButton from "./DeleteButton";

describe("Given a DeleteButton component", () => {
  describe("When its called", () => {
    test("Then it should render an icon with id 'FaxMarkXCircle'", () => {
      render(
        <ShowsProvider>
          <DeleteButton></DeleteButton>
        </ShowsProvider>
      );

      const deleteButtonExpected = screen.getByTestId("FaxMarkXCircle");

      expect(deleteButtonExpected).toBeInTheDocument();
    });
  });
});
