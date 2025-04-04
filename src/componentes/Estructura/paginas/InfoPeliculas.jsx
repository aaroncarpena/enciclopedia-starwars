import { formatoEuropeo } from "../../../biblioteca/biblioteca.js";
import { useContext, useState } from "react";
import { contextoPelicula } from "../../../Contextos/ProveedorPeliculas.jsx";
import InfoPersonajes from "./InfoPersonajes.jsx";

const InfoPeliculas = ({ pelicula }) => {
  const { personajes } = useContext(contextoPelicula);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null)
  return (
    <>
      <div>
        <h3>{pelicula.title}</h3>
        <p>{pelicula.opening_crawl}</p>
        <p>
          <strong>Director: </strong>
          {pelicula.director}
        </p>
        <p>
          <strong>Productor: </strong>
          {pelicula.producer}
        </p>
        <p>
          <strong>Fecha de estreno: </strong>
          {formatoEuropeo(pelicula.release_date)}
        </p>
      </div>
      <div>
        <h4>Personajes: </h4>
        <ul>
          {personajes[pelicula.episode_id].map((personaje, index) => (
            <li onClick={() => {
              setPersonajeSeleccionado(personaje)
            }} key={index}>{personaje.name}</li>
          ))}
        </ul>

        {personajeSeleccionado && <InfoPersonajes personaje={personajeSeleccionado} />}
      </div>
    </>
  );
};

export default InfoPeliculas;
