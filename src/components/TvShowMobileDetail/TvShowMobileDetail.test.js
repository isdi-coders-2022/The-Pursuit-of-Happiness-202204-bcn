import { render, screen } from "@testing-library/react";
import TvShowMobileDetail from "./TvShowMobileDetail";

describe("Given a component TvShowMobileDetail", () => {
  describe("When it receives name=Stars Wars posterURL=url rating=10.0 year=2020 genre=Acción", () => {
    test("Render component TvShowMobileDetailRender", () => {
      render(
        <TvShowMobileDetail
          name="Stars Wars"
          posterURL="url"
          rating="10.0"
          year="2020"
          genre="Acción"
        />
      );
      const linkElement = screen.getByText("Stars Wars");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
