import * as React from 'react';
import styled from 'styled-components';
import GHeader from './components/GHeader';
import RouterContent from './RouterContent';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppIntro = styled.p`
  font-size: large;
`;

export default class extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <GHeader />
        <RouterContent />
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}
