import Contenedor from './componentes/Estructura/Contenedor.jsx'
import Cabecera from './componentes/Estructura/Cabecera';
import Pie from './componentes/Estructura/Pie';
import Contenido from './componentes/Estructura/Contenido';
import ProveedorPeliculas from './Contextos/ProveedorPeliculas';
import InfoPeliculas from './componentes/Estructura/paginas/InfoPeliculas.jsx';
import './App.css'

function App() {

  return (
    <>
    <ProveedorPeliculas>
      <Contenedor>
      <Cabecera />
      <Contenido>
      </Contenido>
      <Pie />
      </Contenedor>
    </ProveedorPeliculas>
    </>
  )
}

export default App
