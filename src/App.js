import React from 'react'
import Typist from 'react-typist'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="LandingPage-NameBox">
          <h1 className="LandingPage-Name" style={{ color: '#fffff0'}}>Kyle Gloria</h1>
          <h1 className="LandingPage-Name">Kyle Gloria</h1>
          <h1 className="LandingPage-Name" style={{ color: '#ffffe0' }}>Kyle Gloria</h1>
        </div>
        <Typist>        
          <p>
          Full Stack Developer | IT Professional
          </p>
        </Typist>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
