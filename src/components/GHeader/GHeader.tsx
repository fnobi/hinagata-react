import * as React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IGHeaderProps } from ".";

import logo from "../../assets/logo.svg";

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
`;

const render: React.SFC<IGHeaderProps> = ({
  userName,
  greeting,
  setUserName
}) => {
  const onClick = () => setUserName("nobi");
  return (
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p onClick={onClick}>
        {greeting}, {userName}
      </p>
      <p>
        <Link to="/">Home</Link> / <Link to="/about/">About</Link> /{" "}
        <Link to="/users/">Users</Link>
      </p>
    </AppHeader>
  );
};

export default render;
