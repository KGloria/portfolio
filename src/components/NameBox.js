import React from 'react'

const NameBox = ({ word }) => {
    return (
      <div className="LandingPage-NameBox">
        <p className="LandingPage-Name" style={{ marginTop: '10px', color: '#fffff0'}}>{word}</p>
          <p className="LandingPage-Name" style={{ color: '#ffffff'}}>{word}</p>
          <p className="LandingPage-Name" style={{ color: '#ffffe0'}}>{word}</p>
      </div>     
    )
  }

export default NameBox
