const InfoPersonaje = ({ personaje }) => {
    return (
      <li>
        <p><strong>Género:</strong> {personaje.gender}</p>
        <p><strong>Altura:</strong> {personaje.height}</p>
        <p><strong>Peso:</strong> {personaje.mass}</p>
        <p><strong>Color de pelo:</strong> {personaje.hair_color}</p>
        <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
      </li>
    );
  };
  
  export default InfoPersonaje;
  