import React from "react";
import { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
    </>
  );
};

export default App;
