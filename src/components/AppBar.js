import React from 'react'
import styled from 'styled-components'

const NavButton = styled.button`
font-size: clamp(1.45em, 2vw, .15em);
transition: all .25s ease;
position: relative;
color: black;
padding: 5px;
border: 2px solid #000000;
background: none;
margin-Left: auto;
margin-Right: 5px;
align-items: center;
display: inline-flex;
top: 1%;
z-Index: 1000;
right: 40px;

&:hover {
  transform: translateY(-.4px);
  transition: all .25s ease;
  border: 2px solid #fff;
}

&:active {
  background-color: #ffffe0;
  box-shadow: 0 5px #666;
}

&:focus {
  border: 2px solid #fff;
  outline: #fff;
}
`

const AppBar = ({ref1, ref2, ref3}) => {

  const executeScroll = (refJump) => refJump.current.scrollIntoView()  

    return (
      <div style={{position: 'fixed', width: '100vw', height: 'clamp(2em, 5vh, 2.5em)', display: 'flex', top: '1%', left: '1%'}}>
        <h2 className='logo' style={{ alignSelf:'center', color: 'Black' }} onClick={() => executeScroll(ref1)}>Kyle Gloria</h2>
        <NavButton onClick={() => executeScroll(ref2)}>Projects</NavButton> 
        <NavButton style={{ marginRight: '25px', marginLeft: '0px' }}onClick={() => executeScroll(ref3)}>Skills</NavButton> 
        {
        //<button className='AppBar-button' style={{top:'1%', left: '-5%', zIndex: '1000', }} onClick={() => executeScroll(ref3)}> Experience </button> 
        }
    </div>
    )
  }



export default AppBar