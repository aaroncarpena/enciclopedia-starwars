import Cabecera from './componentes/Estructura/Cabecera';
import Pie from './componentes/Estructura/Pie';
import Contenido from './componentes/Estructura/Contenido';
import ProveedorPeliculas from './Contextos/ProveedorPeliculas';
import './App.css'

function App() {

  return (
    <>
    <ProveedorPeliculas>
      <Cabecera />
      <Contenido />
      <Pie />
    </ProveedorPeliculas>
    </>
  )
}

export default App
