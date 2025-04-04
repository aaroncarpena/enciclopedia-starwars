import Interprete from "./Interprete.jsx";

const Interpretes = (props) => {
  const { interpretes } = props;
  return (
    <>
      <div id='interpretes'>
        {interpretes.length
          ? interpretes.map((valor, indice) => {
              return <Interprete datos={valor} />;
              
            })
          : `No se han encontrado intérpretes.`}
      </div>
    </>
  );
};

export default Interpretes;