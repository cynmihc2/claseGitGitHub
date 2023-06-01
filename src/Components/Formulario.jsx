import React from 'react'

const Formulario = ({setBday, bday, setStyles}) => {
  return (
    <div>
        <label >Ingresa tu nombre</label>
        <input type="text" onChange={(e) => setBday({...bday, name: e.target.value})}/>

       
        <label >Ingresa tu canción favorita</label>
        <input type="text" onChange={(e) => setBday((prevBday) => ({...prevBday, guest: e.target.value}))}/>

    </div>
  )
}

export default Formulario