import React from 'react';
import '../estilos/Boton.css';

function Boton(props) {
    return (
        <button
            className={props.esBotonContador ? 'btn-contador' : 'btn-reiniciar'}
            onClick={props.gestionarClick}
        >
            {props.etiqueta}
        </button>
    );
}

export default Boton;