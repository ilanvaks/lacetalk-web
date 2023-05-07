import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
