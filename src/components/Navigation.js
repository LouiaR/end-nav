import React from "react";
import styled from "styled-components";

import { ReactComponent as ReactLogo } from "./logo.svg";
import { ReactComponent as SearchIcon } from "./searchIcon.svg";
import NavMenu from "./NavMenu";

const Header = styled.header`
  padding: 1rem 1rem 0.6rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  > svg:first-child {
    margin: 0 auto;
    width: 7rem;
  }
`;

const MetaIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 1.5rem;
    margin-right: 1rem;
  }
`;

const Basket = styled.div`
  height: 2rem;
  width: 2rem;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNC41IDI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNC41IDI3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIyLjQsNS41djE5LjZIMi4xVjUuNUgyMi40IE0yNC4zLDMuN0gwLjJ2MjMuMmgyNC4xVjMuN0wyNC4zLDMuN3oiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGQ9Ik03LjMsOS43TDUuNSw5LjRjMC4yLTAuOSwxLjktOS4yLDYuNy05LjJDMTcuNCwwLjIsMTksOSwxOSw5LjRsLTEuOCwwLjNjLTAuNC0yLjEtMi03LjctNC45LTcuN0M5LjQsMiw3LjcsNy43LDcuMyw5Ljd6IgoJCS8+CjwvZz4KPC9zdmc+Cg==");
`;

const Navigation = () => {
  return (
    <Header>
      <Logo>
        <ReactLogo />
        <MetaIcon>
          <SearchIcon />
          <Basket />
        </MetaIcon>
      </Logo>
      <NavMenu />
    </Header>
  );
};

export default Navigation;
