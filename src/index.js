import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { setupWorker, rest } from "msw";

// const worker = setupWorker(
//   rest.get("https://api.tvmaze.com/shows", (req, res, ctx) => {
//     return res(ctx.json({ name: "John", url: "siteURL" }));
//   })
// );
// worker.start();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
