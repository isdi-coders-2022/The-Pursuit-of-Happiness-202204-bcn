import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request

  rest.get("https://api.tvmaze.com/shows", null, (req, res, ctx) => {
    // const { username } = req.body;

    return res(
      ctx.json({
        id: "1",
        name: "LaPeli",
      })
    );
  }),
];
