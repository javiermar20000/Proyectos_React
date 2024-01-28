import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img 
            className="imagen-testimonio"
            src={require(`../imagenes/distro-${props.imagen}.png`)}
            alt="Foto de Debian"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">{props.nombre} basado en {props.kernel}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );

}
export default Testimonio;