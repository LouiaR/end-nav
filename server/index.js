import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import Html from "../src/Html";
import { ServerStyleSheet } from "styled-components";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet(); 

  const body = renderToString(sheet.collectStyles(<App />)); 
  const styles = sheet.getStyleTags(); 
  const title = "Server side Rendering with Styled Components";

  res.send(
    Html({
      body,
      styles, 
      title,
    })
  );
});

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.listen(port);
console.log(`Serving at http://localhost:${port}`);
