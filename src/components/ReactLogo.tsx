import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { styleAsset } from '~/constants/styleVariables';

const keyframesAppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.div`
    width: 80px;
    height: 80px;
    margin: auto;
    background-image: ${styleAsset('logo.svg')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    animation: ${keyframesAppLogoSpin} infinite 20s linear;
`;

interface Props {
    onClick: () => void;
}

const ReactLogo: React.SFC<Props> = ({ onClick }) => <Logo onClick={onClick} />;

export default ReactLogo;
