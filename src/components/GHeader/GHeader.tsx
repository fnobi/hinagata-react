import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import logo from '../../assets/logo.svg';

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

export interface IProps {
  userName: string,
}

const render: React.SFC<IProps> = ({ userName }) => (
  <AppHeader>
    <AppLogo src={logo} alt="logo" />
    <p>Hello, { userName }</p>
    <p>
      <Link to="/">Home</Link> / <Link to="/about/">About</Link> / <Link to="/users/">Users</Link>
    </p>
  </AppHeader>
);

export default render;
