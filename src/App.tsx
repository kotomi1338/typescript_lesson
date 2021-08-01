import React from 'react';
import logo from './logo.svg';
import './App.css';

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = { first: 'kaito', last: 'takahashi' };

const sum = (x: number, y: number): number => {
  return x + y;
}

let nameObj2: typeof nameObj = {
  first: 'ren',
  last: 'nagase'
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}
type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 20,
  city: 'yokohama',
  username: 'kotomi1338',
  password: 'password'
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
