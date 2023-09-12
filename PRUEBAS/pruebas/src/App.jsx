import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData]= useState();

  useEffect(() => {
    const getData = async () => {
      const respuesta = await fetch(
        "https://api.adviceslip.com/advice"
        );
      const datos = await respuesta.json();

      console.log(datos.slip)
      setData(datos.slip);

    };

    getData();
  }, []);

  
  return (
    <>
    <div>
    {data && data.map((el)=>(<h2>{el.advice}</h2>))}   
     </div>
        
    </>
  );
}

export default App;
