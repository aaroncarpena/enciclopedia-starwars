import { useContext, useState, useEffect } from 'react'
import { contextoPelicula } from '../Contextos/ProveedorPeliculas.jsx'
const useProveedorPelicula = () => {
  const objeto = useContext(contextoPelicula);
  
  return{objeto};

  
}

export default useProveedorPelicula;