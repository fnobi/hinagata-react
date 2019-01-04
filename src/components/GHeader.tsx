import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { MEDIA, styleAsset } from '~/constants/styleVariables';
import { GHeaderProps } from '~/containers/GHeader';

const keyframesAppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppHeader = styled.header`
    padding: 20px;
    color: white;
    ${MEDIA.PC} {
        background-color: #222;
    }
    ${MEDIA.SP} {
        background-color: #002;
    }
`;

const AppLogo = styled.div`
    width: 80px;
    height: 80px;
    margin: auto;
    background-image: ${styleAsset('logo.svg')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    pointer-events: none;
    animation: ${keyframesAppLogoSpin} infinite 20s linear;
`;

const NavItem = styled.li`
    display: inline-block;
    &:after {
        content: '/';
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

const render: React.SFC<GHeaderProps> = ({
    userName,
    greeting,
    rotateUserName,
}) => (
    <AppHeader>
        <AppLogo />
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