import React from 'react'

const LinkOverlay = ({links}) => {
    
    return (
        <div className='Icon-Overlay'>
            <div style={{position: 'absolute', left: '0%', top: '40%', right: '0%' }}>
            {links.map(link => 
                <a href={link.url} key={link.id}>
                <img className='Icon-Image' src={link.image} alt={link.label}/>
                </a>
            )}
            </div>
        </div>
    )
}

export default LinkOverlay