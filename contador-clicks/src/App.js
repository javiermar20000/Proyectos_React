import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import MueblesCaracolLogo from "./imagenes/intro.jpg";
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

const manejarClick = () => {
  setNumClicks(numClicks + 1);
}

const reiniciarContador = () => {
  setNumClicks(0);
}

  return (
    <div className="App">
      <div className="mueblescaracol-logo-contenedor">
        <img
          className="mueblescaracol-logo"
          src={MueblesCaracolLogo}
          alt="Logo de Muebles Caracol"/>
      </div>
    <div className="contenedor-principal">
      <Contador numClicks={numClicks}/>
      <Boton
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
      <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>

    </div>
    </div>
  );
}

export default App;
