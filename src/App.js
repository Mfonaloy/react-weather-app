import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return <div className="App">
    <div className="container">
   <Weather />
    <footer>
      This project was coded by{" "} 
      <a href="https//www.linkedin.com/in/mfonobong-nnamseh-46529272" target="blank" rel="noopener noreferrer">
         Mfon Aloy </a>{" "} and is{" "} 
    <a href="https://github.com/Mfonaloy/react-weather-app"
    target="blank" rel="noopener noreferrer">open-sourced on Github</a>
    </footer>
    </div>
    </div>;
  
}


