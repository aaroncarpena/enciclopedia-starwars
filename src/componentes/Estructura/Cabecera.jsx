import Nav from "./Nav";
import useProveedorPelicula from "../../Hooks/useProveedorPelicula.js";
import './Cabecera.css'
const Cabecera = () => {
  const {peliculas, error} = useProveedorPelicula();

  return (
    <>
        <h1>ENCICLOPEDIA STARWARS</h1>
        <ul>
          {peliculas.map((pelicula) => (
            <li key={pelicula.episode_id}>{pelicula.episode_id}. {pelicula.title}</li>
          ))}
        </ul>
        <Nav />
    </>
  )
}

export default Cabecera;