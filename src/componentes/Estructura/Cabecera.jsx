import { contextoPelicula } from "../../Contextos/ProveedorPeliculas";
import { useContext, useState } from "react";
import "./Cabecera.css";
import InfoPeliculas from "./paginas/InfoPeliculas";

const Cabecera = () => {
  const { peliculas, error } = useContext(contextoPelicula);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  return (
    <>
      <h1>ENCICLOPEDIA STARWARS</h1>
      {peliculas.map((pelicula) => (
        <ul
          onClick={() => {
            setPeliculaSeleccionada(pelicula);
          }}
          key={pelicula.episode_id}
        >
          <li>
            {pelicula.episode_id}. {pelicula.title}
          </li>
        </ul>
      ))}

      {peliculaSeleccionada && (
        <InfoPeliculas pelicula={peliculaSeleccionada} />
      )}
    </>
  );
};

export default Cabecera;
