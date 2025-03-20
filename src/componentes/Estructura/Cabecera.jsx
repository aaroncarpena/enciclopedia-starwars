import { useContext } from "react";
import Nav from "./Nav";
import { contextoPelicula } from "../../Contextos/ProveedorPeliculas.jsx";
import useProveedorPelicula from "../../Hooks/useProveedorPelicula.js";
const Cabecera = () => {
  //const {sandalia} = useProveedorPelicula();
  const {sandalia} = useContext(contextoPelicula);
  console.log(sandalia)
  // console.log(contextoPelicula)

  return (
    <>
        <h1>ENCICLOPEDIA STARWARS</h1>
        <p>{sandalia}</p>
        <Nav />
    </>
  )
}

export default Cabecera;