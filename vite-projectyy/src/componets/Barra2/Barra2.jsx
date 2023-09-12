
function Barra2(props) {
   
  
  return (

    <div className="barra2">
    
        <ul>
        {props.arreglo.map((e,i)=><li id="li2" key={i}>{e}</li>)}
        </ul>
        
    
    </div>
  );
  
}

export default Barra2;