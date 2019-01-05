import * as React from 'react';
import { ReactNode } from 'react';
import 'reset.css';
import styled from 'styled-components';
import GHeader from '~/components/GHeader';
import { MEDIA } from '~/constants/styleVariables';

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

interface Props {
    children: ReactNode[];
}

const DefaultLayout: React.SFC<Props> = ({ children }) => (
    <AppWrapper>
        <AppHeader>
            <GHeader greeting="Hello" />
        </AppHeader>
        {children}
        <AppIntro>
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
    </AppWrapper>
);

export default DefaultLayout;
