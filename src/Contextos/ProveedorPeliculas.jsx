import { createContext, useEffect, useState } from "react";

const contextoPelicula = createContext();
const ProveedorPeliculas = ({children}) => {
 
const datosAExportar = {}
  return(
    <contextoPelicula.Provider value={datosAExportar}>
        {children}
    </contextoPelicula.Provider>
  )
}

export default ProveedorPeliculas;
export {contextoPelicula};
