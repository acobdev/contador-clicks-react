import React, {useState} from 'react';

import Cabecera from './Cabecera.jsx';
import Contador from './Contador.jsx';
import Boton from './Boton.jsx';
import '../estilos/App.css';

function App() {

  //REACT HOOK ENCARGADO DE GUARDAR EL ESTADO DEL CONTADOR:
  const [numClicks, setNumClicks] = useState(0);


  //FUNCIONES DE EVENTO DE BOTÓN DE LA APLICACIÓN:
  const aumentarContador = () => {
    setNumClicks(numClicks + 1);
    console.log("--Se ha aumentado en 1 el contador. Actualmente: " + (numClicks + 1) + "--");
  }

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log("--Se ha reseteado el contador--");
  }


  // FRAGMENTO HTML EMBEBIDO EN EL ARCHIVO JSX:
  return (
    <div className='App'>
      <Cabecera />
      <Contador contadorClicks={numClicks} />
      <div className='contenedor-botones'>
        <Boton etiqueta='CLICK AQUÍ' esBotonContador={true} gestionarClick={aumentarContador} />
        <Boton etiqueta='REINICIAR' esBotonContador={false} gestionarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;