import * as React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IGHeaderProps } from ".";

import logo from "~/assets/logo.svg";

const keyframesAppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppHeader = styled.header`
  background-color: #222;
  padding: 20px;
  color: white;
`;

const AppLogo = styled.img`
  animation: ${keyframesAppLogoSpin} infinite 20s linear;
  height: 80px;
  pointer-events: none;
`;

const NavItem = styled.li`
  display: inline-block;
  &:after {
    content: "/";
    padding: 0em 0.5em;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  a {
    color: inherit;
  }
`;

const render: React.SFC<IGHeaderProps> = ({
  userName,
  greeting,
  rotateUserName
}) => (
  <AppHeader>
    <AppLogo src={logo} alt="logo" />
    <p onClick={rotateUserName}>
      {greeting}, {userName}
    </p>
    <ul>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about/">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/users/">Users</Link>
      </NavItem>
    </ul>
  </AppHeader>
);

export default render;
