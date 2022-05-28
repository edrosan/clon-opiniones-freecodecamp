import './App.css';
import Testimonio from './componentes/Testimonio';
import {datosShawn, datosSarah, datosEmma} from './datos/datos'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre={datosShawn.nombre}
          pais={datosShawn.pais}
          imagen={datosShawn.imagen}
          cargo={datosShawn.cargo}
          empresa={datosShawn.empresa}
          testimonio={datosShawn.testimonio}
          descripcion={datosShawn.descripcion} />
          
        <Testimonio 
          nombre={datosSarah.nombre}
          pais={datosSarah.pais}
          imagen={datosSarah.imagen}
          cargo={datosSarah.cargo}
          empresa={datosSarah.empresa}
          testimonio={datosSarah.testimonio}
          descripcion={datosSarah.descripcion} />
          
        <Testimonio 
          nombre={datosEmma.nombre}
          pais={datosEmma.pais}
          imagen={datosEmma.imagen}
          cargo={datosEmma.cargo}
          empresa={datosEmma.empresa}
          testimonio={datosEmma.testimonio}
          descripcion={datosEmma.descripcion} />
      </div>
    </div>
  );
}

export default App;
