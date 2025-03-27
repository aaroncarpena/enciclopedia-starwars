import React from 'react'
import useProveedorPelicula from '../../../Hooks/useProveedorPelicula.js'
import {formatoEuropeo} from '../../../biblioteca/biblioteca.js'
const InfoPeliculas = () => {
    const {peliculas, error} = useProveedorPelicula();
  return (
   <>
    <div>
        <h1>{peliculas.title}</h1>
        <p>{peliculas.opening_crawl}</p>
        <h5>Director: {peliculas.director}</h5>
        <h5>Productor: {peliculas.producer}</h5>
        <h5>Fecha de estreno: {formatoEuropeo(peliculas.release_date)}</h5>
    </div>
   </>
  )
}

export default InfoPeliculas