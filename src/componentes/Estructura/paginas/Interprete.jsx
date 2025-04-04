const Interprete = (props) => {
    
  const { name, gender, height, mass, hair_color, eye_color } = props;
  return (
    <>
      <div>
        <p><strong>Nombre:</strong>{name}</p>
        <p><strong>Género:</strong>{gender}</p>
        <p><strong>Altura:</strong>{height}</p>
        <p><strong>Peso:</strong>{mass}</p>
        <p><strong>Color de pelo:</strong>{hair_color}</p>
        <p><strong>Color de ojos:</strong>{eye_color}</p>

      </div>
    </>
  );
  };
  
  export default Interprete;