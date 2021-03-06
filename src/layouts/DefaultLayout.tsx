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

const AppHeader = styled.header`
    padding: 20px;
    padding-top: 0px;
    color: white;
    ${MEDIA.PC} {
        background-color: #222;
    }
    ${MEDIA.SP} {
        background-color: #002;
    }
`;

const AppContent = styled.div`
    margin: 1em 0em;
`;

interface Props {
    children: ReactNode[];
}

const DefaultLayout: React.SFC<Props> = ({ children }) => (
    <AppWrapper>
        <AppHeader>
            <GHeader greeting="Hello" />
        </AppHeader>
        <AppContent>{children}</AppContent>
    </AppWrapper>
);

export default DefaultLayout;
