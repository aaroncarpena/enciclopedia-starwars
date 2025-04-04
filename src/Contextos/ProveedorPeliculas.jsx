import { createContext, useEffect, useState } from "react";

const contextoPelicula = createContext();

const ProveedorPeliculas = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [personajes, setPersonajes] = useState({});

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