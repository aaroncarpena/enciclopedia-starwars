import React from 'react'

const InfoNaves = ({nave}) => {
  return (
    <>
        <div>
            <p><strong>Nombre: </strong>{nave.name}</p>
            <p><strong>Modelo: </strong>{nave.modelo}</p>
            <p><strong>Manufacturador: </strong>{nave.manufacturer}</p>
            <p><strong>Clase: </strong>{nave.starship_class}</p>
            <p><strong>Precio: </strong>{nave.cost_in_credits}</p>
        </div>
    </>
  )
}

export default InfoNaves;