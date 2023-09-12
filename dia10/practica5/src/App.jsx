import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const[cambio, setCambio]=useState (true)


  useEffect(() => {
    const getData = async () => {
      const respuesta = await fetch("https://api.adviceslip.com/advice");
      const datos = await respuesta.json();
      console.log(datos.slip);
      setData([datos.slip]);
    };
    getData();
  }, [cambio]);

  const azar = () => {
    setCambio(!cambio,true)
  };

  return (
    <>
      {data &&
        data.map((el) => (
          <div className="card">
            <div className="titulo">
              <h3>Advice # {el.id}</h3>
            </div>
            <div className="advice">
              {" "}
              <h2 key={el.id}>"{el.advice}"</h2>
              <p>__________________ | | __________________</p>
            </div>
            <div>
              <button className="boton" onClick={azar}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                    fill="#202733"
                  />
                </svg>
              </button>
            </div>
          </div>
          
        ))}
    </>
  );
}
export default App;
