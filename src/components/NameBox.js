import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  border: 10px solid white;
  min-width: 50vw;
  box-Shadow: 0 5px #666;
  max-height: 50vw;
  height: 300px;
  width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Name = styled.p`

  color: ${props => props.primary};
  font-size: calc(70px + 3vmin);
  margin: 0 auto;
  margin-Top: -16px; 
  margin-Bottom: -16px;

  &:hover {
    font-size: calc(75px + 3vmin);
    transition: all 1s ease;
  }
`

const NameBox = ({ word }) => {
    return (
      <Box>
          <Name primary="#fffff0" style={{ marginTop: "16px" }}>{word}</Name>
          <Name primary="#ffffff">{word}</Name>
          <Name primary="#ffffe0">{word}</Name>
      </Box>   
    )
  }

export default NameBox
