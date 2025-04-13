import React from 'react'
import InfoPersonaje from './InfoPersonaje.jsx'

const InfoPersonajes = ({personaje}) => {
  return (
    <>
      <div>
        {personaje.map((v) => {
          return (
            <InfoPersonaje personaje={v}/>
          )
        })}
        </div>    
    
    </>
  )
}

export default InfoPersonajes