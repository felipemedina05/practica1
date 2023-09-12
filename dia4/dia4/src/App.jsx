import { useState } from "react"
import Button from "./components/Button"
import "./App.css"

function idramdon(max){
  return Math.floor(Math.random)()*max
}
function App() {

  const [background, setBackground] = useState("white");
  const colors=["blue","red","black","yellow"]

  const handleClick = () =>{
    const i = idramdon(colors.length);
    const randomColor = colors[i]

    setBackground(randomColor);
    document.body.style.backgroundColor=randomColor

  }
  return (
    <>
    
  
    <p>color is : {background}</p>
    <button onClick={handleClick}>Click Me</button>
    
    </>
  )
}

export default App
