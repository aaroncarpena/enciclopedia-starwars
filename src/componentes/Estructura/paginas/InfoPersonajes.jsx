import React from "react";

const InfoPersonajes = ({personaje}) => {
  return (
    <>
      <div>
        <p>
          <strong>Nombre:</strong>
          {personaje.name}
        </p>
        <p>
          <strong>Género:</strong>
          {personaje.gender}
        </p>
        <p>
          <strong>Altura:</strong>
          {personaje.height}
        </p>
        <p>
          <strong>Peso:</strong>
          {personaje.mass}
        </p>
        <p>
          <strong>Color de pelo:</strong>
          {personaje.hair_color}
        </p>
        <p>
          <strong>Color de ojos:</strong>
          {personaje.eye_color}
        </p>
      </div>
    </>
  );
};

export default InfoPersonajes;
