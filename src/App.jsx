import { useState } from "react";
import "./App.css";

import Barra1 from "./componets/Barra1/Barra1";
import Barra2 from "./componets/Barra2/Barra2";
import Encabezado from "./componets/Encabezado/Encabezado";
import Foto from "./componets/Foto/Foto";

function App() {
  const perfil = [
    "Phone number: (+57) 3184340457 (Mobile) ",
    "Email address:felipemedina821@gmail.com",
    "Address: pasto, nariño, Colombia (Home) ",
  ];
  const [habilidades,setHabilidades] = useState( [
    "Skype",
    "Zoom",
    "Windows",
    "MS Office",
    "VisualStudioCode",
    "CSS",
    "javascript",
  ]);
  const [idiomas,setIdiomas] = useState( ["español"] );
  const [intereses,setInterese] = useState( [
    "acudir al teatro",
    "pasión por el cine",
    "los museos",
    "practicar fútbol",
    "Afición por viajar",
    "descubrir nuevas culturas",
  ]);
  const [experiencia,setExperienci] = useState([
    "16/01/2023 – CURRENT Administrative Assistant - ICBF Responsibilities: Support in archiving the documentation that needs to be stored in the records of care for  children and adolescents. Support in digitizing and uploading information that is stored in the records of care  for children and adolescents in the mission information system of the ICBF-SIM, according to the organization  of the Family Defenders within the framework of the unified strategy. Construction, feeding, and  maintenance of databases. Direct Supervisor: Martha Lucia Arévalo, Zonal Coordinator  Pasto 1 – ICBF . Tel: 3145446012",
    "2015 – 2021 Administrative Assistant – Mujer y Genero Responsibilities: Management of physical and digital information in the CUENTAME information  application. Support in the coordination and planning of programs, coordination and management of  information reports. Direct Supervisor: Sandra Maria Cárdenas,  Legal Representative. Tel: 3163894319",
  ]);
  const [educacion,setEducacion] = useState([
    "Biomedical Technologist Sena -- Bogotá Campus",
    " Programmer With Emphasis On Front-End React -- One Oracle Next Education",
    " Programmer With Emphasis On Mobile Applications Mission Tic 2022 -- Universidad De Caldas",
    "Technologist in maintenance of biomedical -- (SENA) - Bogotá Campus",
    " Professional Technician in maintenance of computer equipment --(SENA) Pasto ",
  ]);


  const [ocultar, setOcultar] = useState(true);
  const [ocultarI, setOcultarI] = useState(true);
  const [ocultarE, setOcultarE] = useState(true);
  const [ocultarEd, setOcultarEd] = useState(true);
  const [ocultarIn, setOcultarIn] = useState(true);
  const [agregar, setAgregar] = useState([habilidades]);
  const [agregarI, setAgregarI] = useState([idiomas]);
  const [agregarE, setAgregarE] = useState([experiencia]);
  const [agregarEd, setAgregarEd] = useState([educacion]);
  const [agregarIn, setAgregarIn] = useState([intereses]); 
  

  const mostrar = () => setOcultar(!ocultar);
  const mostrarI = () => setOcultarI(!ocultarI);
  const mostrarE = () => setOcultarE(!ocultarE);
  const mostrarEd = () => setOcultarEd(!ocultarEd);
  const mostrarIn = () => setOcultarIn(!ocultarIn);

  const add= () => setHabilidades([...habilidades,agregar])   
  const addI= () => setIdiomas([...idiomas,agregarI]) 
  const addE= () => setExperienci([...experiencia,agregarE]) 
  const addEd= () => setEducacion([...educacion,agregarEd]) 
  const addIn= () => setInterese([...intereses,agregarIn])  
  return (
    <>
      <div className="contenedor">
        <div id="barra1">
          <Foto className="foto"></Foto>
          
          <h2>Perfil</h2> 
          {perfil.map((e)=><p>{e}</p>)}

          <h2>Habilidades <button onClick={mostrar}>v</button> </h2> 
          {ocultar ? (
            <>
              <Barra1 arreglo={habilidades} />
              <input type="text" onChange={(e)=>{setAgregar((e.target.value))}}/>
              
              <button onClick={add}>+</button>
              
            </>
          ) : <></>}
          <h2>idiomas  <button onClick={mostrarI}>v</button></h2> 
          {ocultarI ? (
            <>
              <Barra1 arreglo={idiomas} />
              <input type="text" onChange={(e)=>{setAgregarI((e.target.value))}}/>
              <button onClick={addI}>+</button>
              
            </>
          ) : <></>}

          <h2>intereses <button onClick={mostrarIn}>v</button> </h2> 
          {ocultarIn ? (
            <>
              <Barra1 arreglo={intereses} />
              <input type="text" onChange={(e)=>{setAgregarIn((e.target.value))}}/>
              <button onClick={addIn}>+</button>
              
            </>
          ) : <></>}

        </div>
        <div id="barra2">
          <Encabezado Encabezado="Andres Felipe Medina"></Encabezado>
          <Encabezado descripcion="WEB AND MOBILE DEVELOPER"></Encabezado>

          <h2>Experienci Profesional <button onClick={mostrarE}>v</button></h2> 
          {ocultarE ? (
            <>
              <Barra1 arreglo={experiencia} />
              <input type="text" onChange={(e)=>{setAgregarE((e.target.value))}}/>
              <button onClick={addE} >+</button>
              
            </>
          ) : <></>}
          <h2>Educacion  <button onClick={mostrarEd}>v</button> </h2> 
          {ocultarEd ? (
            <>
              <Barra1 arreglo={educacion} />
              <input type="text" onChange={(e)=>{setAgregarEd((e.target.value))}}/>
              <button onClick={addEd}>+</button>
              
              
            </>
          ) : <></>}
        
        
        </div>
      </div>
    </>
  );
}

export default App;
