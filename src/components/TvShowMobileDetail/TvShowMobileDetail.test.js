import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ShowsProvider from "../../store/context/ShowsProvider";
import TvShowMobileDetail from "./TvShowMobileDetail";

describe("Given a component TvShowMobileDetail", () => {
  describe("When it receives name=Stars Wars posterURL=url rating=10.0 year=2020 genre=Acción", () => {
    test("Render component TvShowMobileDetailRender", () => {
      const history = createMemoryHistory();

      render(
        <ShowsProvider>
          <Router location={history.location} navigator={history}>
            <TvShowMobileDetail
              name="Stars Wars"
              posterURL="url"
              rating="10.0"
              year="2020"
              genre="Acción"
              summary="texto de summary"
            />
          </Router>
        </ShowsProvider>
      );
      const linkElement = screen.getByText("Stars Wars");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
