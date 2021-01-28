import React, { useRef } from 'react'
import Typist from 'react-typist'
import './App.css';
import NameBox from './components/NameBox'
import LinkOverlay from './components/LinkOverlay'

const App = () => {

  const links = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kyle-gloria/',
      image: 'https://www.iconninja.com/files/479/390/409/linkedin-icon.png',
      id: '1'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/KGloria',
      image: 'https://www.iconninja.com/files/930/277/269/github-icon.png',
      id: '2'
    }
  ] 


  const pg2 = useRef(null)
  const pg3 = useRef(null)
  const pg4 = useRef(null)

  const executeScroll = (refJump) => refJump.current.scrollIntoView()  

  return (
    <>

      <LinkOverlay links={links}/>

      <div style={{position: 'fixed', width: '100vw', height: 'clamp(2em, 5vh, 2.5em)', display: 'flex', top: '1%', left: '1%'}}>
        <h2 style={{ alignSelf:'center', color: 'white' }}>Kyle Gloria</h2>
        <button className='AppBar-button' style={{top:'1%', left: '33%', zIndex: '1000', }} onClick={() => executeScroll(pg2)}> Skills </button> 
        <button className='AppBar-button' style={{top:'1%', left: '14%',  zIndex: '1000', }} onClick={() => executeScroll(pg3)}> Projects </button> 
        <button className='AppBar-button' style={{top:'1%', left: '-5%', zIndex: '1000', }} onClick={() => executeScroll(pg4)}> Experience </button> 
      </div>


      <div className="App">

        <header className="App-header"> 
            <NameBox word="Kyle Gloria"/>
            <p className='LandingPage-Desc'>Full Stack Developer | IT Professional</p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </header>
        <header className="App-header"> 
            <NameBox word="Kyle Gloria"/>
            <p className='LandingPage-Desc'>Full Stack Developer | IT Professional</p>

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
    </>
  );
}

export default App;
