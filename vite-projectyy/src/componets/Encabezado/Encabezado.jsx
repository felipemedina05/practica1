

function Encabezado(props) {
 
    return (
     
      <div className="encabezado">
      <p> <h1>{props.Encabezado}</h1>
       <h3>{props.descripcion}</h3>
       </p>
       </div>
    )
  }
  
  export default Encabezado
  