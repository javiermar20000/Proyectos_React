import './App.css';
import MueblesCaracolLogo from "./imagenes/intro.jpg";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="mueblescaracol-logo-contenedor">
        <img 
          src={MueblesCaracolLogo}
          className="mueblescaracol-logo" />

      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
