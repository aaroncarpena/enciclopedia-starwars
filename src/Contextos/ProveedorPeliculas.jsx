import { createContext, useEffect, useState } from "react";

const contextoPelicula = createContext();

const ProveedorPeliculas = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [personajes, setPersonajes] = useState({});
  const [naves, setNaves] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

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
  //Modificar
  const traerPersonajes = (pelicula) => {

    let personajesTemp = [];
    pelicula.characters.forEach((url) => {
      fetch(url)
        .then((res) => res.json())
        .then((personaje) => {
          personajesTemp.push(personaje);
          if (personajesTemp.length === pelicula.characters.length) {
            setPersonajes((prev) => ({
              ...prev,
              [pelicula.episode_id]: personajesTemp,
            }));
          }
        });
    });
  };
  //Modificar
  const traerNaves = (personaje) => {
    let navesTemp = [];
    characters.starships.forEach((url) => {
      fetch(url)
      .then((res) => res.json())
      .then((nave) => {
        navesTemp.push(nave);
        if(navesTemp.length === starships.length){
          setNaves((prev) => ({
            ...prev, [characters.name] : navesTemp,
          }));
        }
      });
    });
  };
  const traerVehiculos = (personaje) => {

  }

  useEffect(() => {
    traerPeliculas();
  }, []);

  const datosAExportar = {
    peliculas,
    personajes,
  };

  return (
    <contextoPelicula.Provider value={datosAExportar}>
      {children}
    </contextoPelicula.Provider>
  );
};

export default ProveedorPeliculas;
export { contextoPelicula };