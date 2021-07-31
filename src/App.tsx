import React from 'react';
import logo from './logo.svg';
import './App.css';

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = { first: 'kaito', last: 'takahashi' };

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
