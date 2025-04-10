import React from 'react'

const InfoVehiculos = ({vehiculo}) => {
  return (
    <>
        <div>
            <p><strong>Nombre:</strong>{vehiculo.name}</p>
            <p><strong>Modelo:</strong>{vehiculo.model}</p>
            <p><strong>Manufacturador:</strong>{vehiculo.manufacturer}</p>
            <p><strong>Clase:</strong>{vehiculo.vehicle_class}</p>
            <p><strong>Precio: </strong>{nave.cost_in_credits}</p>
        </div>
    </>
  )
}

export default InfoVehiculos;