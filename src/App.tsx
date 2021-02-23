import React from 'react';

import './assets/styles/global.css';

//Por padrão procura o arquivo index
import Routes from './routes';

//JSX - JAVASCRIPT + XML (O HTML utiliza a sintaxe do XML)
//Componente assim como as classes, devem iniciar com letra maiúscula, porque se minisculo na utilização do componente a estrutura react, pode confundir com tag HTML
function App() { //componenente = função que retorna HTML
  return (
    <Routes />
  );
}

export default App;
