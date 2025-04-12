import { createContext, useEffect, useState } from "react";

const contextoPelicula = createContext();

const ProveedorPeliculas = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [personajes, setPersonajes] = useState({});
  const [naves, setNaves] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  const traerDatos = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Error en traerDatos:", error);
      return null;
    }
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
  const traerPersonajes = async (listadoPersonajes, episode_id) => {
    let personajesTemporales = [];
    listadoPersonajes.characters.map((valor, indice) => {
      personajesTemporales = [...personajesTemporales, traerDatos(valor)];
    })
    const datos = await Promise.allSettled(personajesTemporales);
    console.log("Estos son los datos: ", datos)
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
  const traerVehiculos = async (listadoVehiculos) => {
    let vehiculosTemporales = [];
    listadoVehiculos.map((valor, indice) => {
      vehiculosTemporales = [...vehiculosTemporales, traerDatos(valor)];
    })
    const datos = await Promise.allSettled(vehiculosTemporales);
    setVehiculos[datos]
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