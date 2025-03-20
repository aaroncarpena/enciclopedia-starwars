import React from 'react'

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