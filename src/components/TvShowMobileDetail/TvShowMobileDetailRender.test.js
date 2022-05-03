import { render, screen } from "@testing-library/react";
import TvShowMobileDetail from "./TvShowMobileDetail";

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
  // findAllByText;
  // expect(linkElement).toHaveTextContent("Stars War");
  // expect(screen.getByText("Stars War")).toBeInTheDocument();
});
