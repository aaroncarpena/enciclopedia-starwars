import React from 'react'
import './Contenedor.css'
const Contenedor = ({children}) => {
  return (
    <>
        <div id='contenedor-peliculas'>
            {children}
        </div>
    </>
  )
}

export default Contenedor;