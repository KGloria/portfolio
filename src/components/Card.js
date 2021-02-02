import React, { useState } from 'react'
import styled from 'styled-components'

const Description = styled.p`
    position: absolute; 
    fontColor: Black;
    fontSize: clampt(14px, 14px, 24px);
    width: 100%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%); 
    overflowWrap: break-word;
    padding: 10px;
`

const ProjCard = styled.div`
    width: clamp(250px, 20vw, 250px);
    height: clamp(250px, 20vw, 250px);
    border: 1px solid #F7EEE9;
    display: flex;
    flex-direction: column;
    overflow-Y: hidden; 
    background-Color: black;
    text-Align: center;
    position: relative;
    z-Index: 900;
`

const Card = ({ title, description, image, link}) => {
    const [ hover, setHover ] = useState(false)

    return (
        <ProjCard onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <a href={link} style={{height: "100%", width: "100%" }}>
              <img alt="coloredBackground" src={image} style={hover? {opacity:"45%", height: "100%", width: "100%", objectFit: "fill"} : {height: "100%", width: "100%", objectFit: "fill"}}/>
            </a>
            {hover 
            ? 
            <a href={link} style={{color: "white"}}>
                <Description>{description}</Description>
            </a>
            : <h1 style={{ position:"absolute", width:"100%", top: "35%", left: "50%", transform: "translate(-50%, -50%)", overflowWrap: "break-word"}}>{title}</h1>
            }
        </ProjCard> 
    )
}

export default Card