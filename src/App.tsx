import * as React from 'react';
import 'reset.css';
import styled from 'styled-components';
import GHeader from '~/containers/GHeader';
import RouterContent from '~/RouterContent';

const AppWrapper = styled.div`
    font-family: sans-serif;
    text-align: center;
`;

const AppIntro = styled.p`
    font-size: large;
`;

export default () => (
    <AppWrapper>
        <GHeader greeting="Hello" />
        <RouterContent />
        <AppIntro>
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
    </AppWrapper>
);
