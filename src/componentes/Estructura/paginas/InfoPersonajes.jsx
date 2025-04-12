import {useState, useContext, useEffect} from "react";
import { contextoPelicula } from "../../../Contextos/ProveedorPeliculas.jsx";
import InfoNaves from "./InfoNaves.jsx";
import InfoPersonaje from "./InfoPersonaje.jsx";
const InfoPersonajes = ({listado}) => {
  const {personajes, traerPersonajes} = useContext(contextoPelicula);
 
  return (
    <>
      <div>
        {listado.map((v) => {
          traerPersonajes(v);
        })}
      </div>
    </>
  );
};

export default InfoPersonajes;
