import React, { useRef } from 'react'
import './App.css';
import NameBox from './components/NameBox'
import LinkOverlay from './components/LinkOverlay'
import AppBar from './components/AppBar'
import Card from './components/Card'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  min-width: 50vw;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  padding: 8px;
  align-items: center;
  justify-content: center;
`

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


  const projects = 
    [
      {title: 'Web Portfolio',
       image: 'https://www.colorhexa.com/9e7d68.png',
       link: 'https://github.com/KGloria/portfolio',
       description: 'Website developed in ReactJS framework',
       id: '1'
      },
      {title: 'Chatroom App',
      image: 'https://www.colorhexa.com/B2E9EB.png',
      link: '',
      description: 'Fullstack chatroom app developed in ReactJS framework',
      id: '2'
      },
      {title: 'Pet Door',
       image: 'https://www.colorhexa.com/FFE9DB.png',
       link: '',
       description: 'Petdoor prototype developed in python',
       id: '3'
      },
      {title: 'Note App',
       image: 'https://www.colorhexa.com/2E5052.png',
       link: 'https://fathomless-tor-12050.herokuapp.com/',
       description: 'Fullstack note app develped in ReactJS framework',
       id: '4'
      },
      {title: '3D Unity Game',
       image: 'https://www.colorhexa.com/D1B2EB.png',
       link: 'https://github.com/KGloria/PreGame-Party',
       description: 'C# game using Unity Engine. (Two minigames)',
       id: '5'
      },
      {title: 'Unix Shell',
       image: 'https://www.colorhexa.com/EBC8B2.png',
       link: 'https://github.com/KGloria/Shell_Project',
       description: 'Implementation of TCSH Unix Shell in C',
       id: '6'
      },
      {title: 'Homelab',
       image: 'https://www.colorhexa.com/689C9E.png',
       link: 'https://github.com/KGloria/Homelab',
       description: 'Personal server for Minecraft, Plex, & Webhosting',
       id: '7'
      },
      {title: 'Calculator',
       image: 'https://www.colorhexa.com/EBB4B2.png',
       link: 'https://github.com/KGloria/Windows_Calculator',
       description: 'C# implementation of Windows 10 calculator',
       id: '8'
      }
    ]


  const pg1 = useRef(null)
  const pg2 = useRef(null)
  const pg3 = useRef(null)

  return (
    <>

      <LinkOverlay links={links}/>
      <AppBar ref1={pg1} ref2={pg2} ref3={pg3}/>

      <div className="App">

        <div ref={pg1} className="App-header"> 
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
        </div>
        <div ref={pg2} className="App-header" style={{ background: "#ffffff" }}> 
            <Container>
              {projects.map(project => 
                <Card key={project.id} title={project.title} description={project.description} image={project.image} link={project.link}/>
              )}
            </Container>

        </div>

      <div ref={pg3} className="App-header" style={{ background: "#ffffff" }}> 
        <h3 style={{ color: "grey" }}>Skills</h3>
        <p style={{ border: "2px solid grey", color: "grey", padding: "5px"}}> underConstruction </p>
      </div>
      </div>
    </>
  );
}

export default App;
