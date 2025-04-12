import { contextoPelicula } from "../../Contextos/ProveedorPeliculas";
import { useContext, useState } from "react";
import './Cabecera.css';
import InfoPeliculas from "./paginas/InfoPeliculas";

const Cabecera = () => {
  const { peliculas, error } = useContext(contextoPelicula);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
  return (
    <>
      <h1>ENCICLOPEDIA STARWARS</h1>
      <ul>
        {peliculas.map((pelicula) => (
          <li 
            onClick={() => {
              setPeliculaSeleccionada(pelicula);
            }} 
            key={pelicula.episode_id}
          >
            {pelicula.episode_id}. {pelicula.title}
          </li>
        ))}
      </ul>
      
       {peliculaSeleccionada && <InfoPeliculas pelicula={peliculaSeleccionada} />}
    </>
  );
};

export default Cabecera;