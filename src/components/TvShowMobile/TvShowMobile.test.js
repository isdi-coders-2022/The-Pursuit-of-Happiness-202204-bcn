import { render, screen } from "@testing-library/react";
import ShowsProvider from "../../store/context/ShowsProvider";
import TvShowMobile from "./TvShowMobile";

describe("Given a component TvShowMobileDetail", () => {
  describe("When it receives name=Stars Wars posterURL=url rating=10.0 year=2020 genre=Acción", () => {
    test("Render component TvShowMobileDetailRender", () => {
      render(
        <ShowsProvider>
          <TvShowMobile
            name="Stars Wars"
            posterURL="url"
            rating="10.0"
            year="2020"
            genre="Acción"
          />
        </ShowsProvider>
      );
      const linkElement = screen.getByText("Stars Wars");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
