import React, { Component } from 'react';
import './App.css';
import simplon from './simplon.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is my SimplonApp</h1>
        </header>
        <h1>Welcome to you!!!</h1>
        <img src={simplon} alt='simplon'/>
      </div>
    );
  }
}

export default App;
