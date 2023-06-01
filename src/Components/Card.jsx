import React from 'react'

const Card = ({bday, styles}) => {
    const estilos = {backgroundColor: styles.background, color: styles.color}
  return (
    <div className='card' >
        <h3>HOla {bday.name}</h3>
        <h4>Sabemos que tu color favorito es: {bday.date} </h4>
        
        
    </div>
  )
}

export default Card