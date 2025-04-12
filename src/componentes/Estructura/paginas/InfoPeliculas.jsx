import { formatoEuropeo } from "../../../biblioteca/biblioteca.js";
import { useContext, useState, useEffect } from "react";
import { contextoPelicula } from "../../../Contextos/ProveedorPeliculas.jsx";
import InfoPersonajes from "./InfoPersonajes.jsx";

const InfoPeliculas = ({ pelicula }) => {
  const { personajes, traerPersonajes } = useContext(contextoPelicula);
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
          
          
        </ul>

        {personajeSeleccionado && <InfoPersonajes personaje={personajeSeleccionado} />}
      </div>
    </>
  );
};

export default InfoPeliculas;