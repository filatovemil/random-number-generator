import React from 'react';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number Generator</h1>
      </header>
      <main>
        <RandomNumberGenerator />
      </main>
    </div>
  );
}

export default App;
