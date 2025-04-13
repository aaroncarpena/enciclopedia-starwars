import { formatoEuropeo } from "../../../biblioteca/biblioteca.js";
import { useContext, useState, useEffect } from "react";
import { contextoPelicula } from "../../../Contextos/ProveedorPeliculas.jsx";
import InfoPersonajes from "./InfoPersonajes.jsx";
import ListadoPersonajes from "./ListadoPersonajes.jsx";

const InfoPeliculas = ({ pelicula }) => {

  

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
        <h3>Personajes:</h3>
        <ListadoPersonajes listadoAMostrar={pelicula.characters} />
        </div>
    </>
  );
};

export default InfoPeliculas;
