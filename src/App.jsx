import { useState } from 'react'
import Formulario from './Components/Formulario'
import Card from './Components/Card'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <>
      <Formulario bday={bday} setBday={setBday} />
      <Card bday={bday} >
    </>
  );
}

export default App;
