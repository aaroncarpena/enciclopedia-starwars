import { createContext } from "react";

const contextoPelicula = createContext();
const ProveedorPeliculas = ({children}) => {
const sandalia = "Las sandalias están muy guapas";
const datosAExportar = {sandalia}
  return(
    <contextoPelicula.Provider value={datosAExportar}>
        {children}
    </contextoPelicula.Provider>
  )
}

export default ProveedorPeliculas;
export {contextoPelicula};
