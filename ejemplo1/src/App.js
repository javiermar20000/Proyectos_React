import logo from './logo.svg';
import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Las 3 distribuciones de Linux más importantes</h1>
      <Testimonio
        nombre="Debian"
        kernel="GNU/Linux (LTS)"
        imagen="debian"
        cargo="El mejor sistema"
        empresa="Estabilidad"
        testimonio="Hay muchas razones por las que los usuarios eligen Debian como su sistema operativo – ya sea como usuario/a, para desarrollar, o incluso en entornos corporativos. La mayoría de los usuarios aprecian la estabilidad y los procesos de actualización de paquetes o la distribución entera sin complicaciones. Debian también se usa ampliamente en el sector de desarrollo de software y hardware porque funciona en numerosas arquitecturas y dispositivos, y ofrece un sistema de seguimiento de incidencias público y otras herramientas para el desarrollo. Si planea usar Debian en un entorno profesional, hay beneficios adicionales como las versiones de soporte a largo plazo («Long Term Support», LTS) e imágenes para la nube."/>
      <Testimonio
        nombre="Arch"
        kernel="GNU/Linux (Rolling)"
        imagen="arch"
        cargo="Lo mejor"
        empresa="personalización"
        testimonio="Arch Linux es una distribución GNU/Linux de propósito general, desarrollada independientemente para x86-64, que se esfuerza por proporcionar las últimas versiones estables de la mayoría del software, siguiendo un modelo de lanzamiento continuo (rolling-release). La instalación por defecto deja un sistema de base mínima, que el usuario configurará posteriormente agregando lo que necesite."/>
      <Testimonio
        nombre="Fedora"
        kernel="GNU/Linux (Semi-Rolling)"
        imagen="fedora"
        cargo="Ideal"
        empresa="uso para servidores web"
        testimonio="Fedora es una distribución GNU/Linux para propósitos generales. Es mantenida por una comunidad internacional de ingenieros, diseñadores y usuarios. Se caracteriza por su estabilidad, pero también por estar a la vanguardia en la adopción de software libre y de código abierto. Cuenta con el patrocinio principal de Red Hat (subsidiaria de IBM desde 2019), además de otras empresas de tecnologías de la información y fabricantes de equipos de cómputo como Dell o Lenovo"/>
        
      </div>
    </div>
  );
}

export default App;
