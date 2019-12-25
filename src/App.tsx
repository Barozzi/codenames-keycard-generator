import React from 'react';
import Rules from './components/Rules';
import KeyCard from './components/KeyCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="title">Codenames</div>
      <div className="reload">
        <a className="reload" href="_blank"><button className="reload-key">Generate Keycard</button></a>
      </div>
      <div className="content">
        <KeyCard />
        <Rules />
      </div>
    </div>
  );
}

export default App;
