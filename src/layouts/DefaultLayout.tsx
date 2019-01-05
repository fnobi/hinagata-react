import * as React from 'react';
import 'reset.css';
import styled from 'styled-components';
import GHeader from '~/components/GHeader';
import { MEDIA } from '~/constants/styleVariables';
import RouterContent from '~/RouterContent';

const AppWrapper = styled.div`
    font-family: sans-serif;
    text-align: center;
`;

const AppIntro = styled.p`
    font-size: large;
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

export default () => (
    <AppWrapper>
        <AppHeader>
            <GHeader greeting="Hello" />
        </AppHeader>
        <RouterContent />
        <AppIntro>
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
    </AppWrapper>
);
