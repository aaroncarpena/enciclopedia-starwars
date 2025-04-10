import { createContext, useEffect, useState } from "react";

const contextoPelicula = createContext();

const ProveedorPeliculas = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [personajes, setPersonajes] = useState({});
  const [naves, setNaves] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  const traerDatos = (url) => {
    return fetch(url).then((respuesta) => {
      return respuesta.json();
    }).then((datos) => {
      return datos;
    });
  };

  const traerPeliculas = () => {
    fetch('https://swapi.py4e.com/api/films/')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPeliculas(datos.results);
        datos.results.forEach((pelicula) => {
          traerPersonajes(pelicula);
        });
      });
  };
  const traerPersonajes = async (listadoPersonajes) => {
    let personajesTemporales = [];
    listadoPersonajes.map((valor, indice) => {
      personajesTemporales = [...personajesTemporales, traerDatos(valor)];
    })
    const datos = await Promise.allSettled(personajesTemporales);
    setPersonajes[datos];
  };
  const traerNaves = async (listadoNaves) => {
    let navesTemporales = [];
    listadoNaves.map((valor, indice) => {
      navesTemporales = [...navesTemporales, traerDatos(valor)];
    })
    const datos = await Promise.allSettled(navesTemporales);
    setNaves[datos];
  };
  const traerVehiculos = (personaje) => {

  }

  useEffect(() => {
    traerPeliculas();
  }, []);

  const datosAExportar = {
    peliculas,
    personajes,
    naves,
    vehiculos,
    traerNaves,
    traerPersonajes,
    traerVehiculos,
    traerPeliculas
  };

  return (
    <contextoPelicula.Provider value={datosAExportar}>
      {children}
    </contextoPelicula.Provider>
  );
};

export default ProveedorPeliculas;
export { contextoPelicula };