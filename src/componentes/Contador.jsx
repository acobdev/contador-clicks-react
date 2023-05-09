import React from 'react';
import '../estilos/Contador.css';

function Contador({ contadorClicks }) {
    return (
        <div className='contenedor-contador'>
            <p className='contador-app'>{contadorClicks}</p>
        </div>
    );
}

export default Contador;