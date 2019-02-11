import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="gray-backgroud">
          <img src={logo} lat="logo"/>
          <h2>Let's develop management system!</h2>
        </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Hello React Project
      //       {/* Edit <code>src/App.js</code> and save to reload. */}
      //     </p>
      //     {/* <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}
      //   </header>
      // </div>
    );
  }
}

export default App;
