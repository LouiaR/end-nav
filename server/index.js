import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import Html from "../src/Html";
import { ServerStyleSheet } from "styled-components";

const port = 3000;
const app = express();

// Creating a single index route to server our React application from.
app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

  const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  const title = "Server side Rendering with Styled Components";

  res.send(
    Html({
      body,
      styles, // <-- passing the styles to our Html template
      title,
    })
  );
});

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.listen(port);
console.log(`Serving at http://localhost:${port}`);
