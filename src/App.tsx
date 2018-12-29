import * as React from 'react';
import GHeader from "./components/GHeader";
import RouterContent from './RouterContent';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GHeader />
        <RouterContent />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
