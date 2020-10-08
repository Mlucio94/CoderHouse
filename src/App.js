import React from 'react';
import logo from './logo.svg';
import Img from './components/img';
import Title from './components/title';
import LinkReact from './components/linkReact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img/>
        <Title/>
        <LinkReact/>
        
      </header>
    </div>
  );
}

export default App;
