import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transform from './components/Transform';
import Map from './components/Map';
import Insert from './components/Insert';
import SpringCom from './components/SpringCom';
import List from './components/list';
import Parallelogram from './components/Parallelogram';
import Rotage from './components/Rotage';
import ZNSort from './components/ZNSort';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Grid></Grid>
      {/* <div className="box">box</div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
