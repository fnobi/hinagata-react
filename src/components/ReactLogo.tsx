import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { styleAsset } from '~/constants/styleVariables';

const keyframesAppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ReactLogo = styled.div`
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

export default () => <ReactLogo />;
