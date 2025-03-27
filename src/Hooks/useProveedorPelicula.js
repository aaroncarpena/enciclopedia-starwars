import { useContext, useState, useEffect } from 'react'
import { contextoPelicula } from '../Contextos/ProveedorPeliculas.jsx'
const useProveedorPelicula = () => {
  const objeto = useContext(contextoPelicula);
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState("");
    const traerPeliculas = ()=>{
      fetch('https://swapi.py4e.com/api/films/')
        .then((respuesta) => {
          //console.log(respuesta)
          return respuesta.json()
        }).then((datos) => {
          //console.log(datos.results)
          setPeliculas(datos.results)
        })
        .catch((error)=> {
          setError(error.message);
        })
    }
    useEffect(() => {
      traerPeliculas()
    },[])
  return{objeto, peliculas, error};

  
}

export default useProveedorPelicula;