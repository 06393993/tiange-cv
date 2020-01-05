import React from 'react';
import './App.css';
import Intro from './Intro';
import Publication from './Publication';
import Service from './Service';

function App() {
  return (
    <div className="container">
      <div>
        <Intro />
      </div>
      <div>
        <Publication />
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
}

export default App;
