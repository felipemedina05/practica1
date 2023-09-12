

function Barra1(props) {
  
  
  return (


    <>
      
        {props.arreglo.map((e,i)=><li key={i}>{e}</li>)}
        
        
    </>
  );
}

export default Barra1;
