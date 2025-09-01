import { useState } from "react"
import "./style/App.css";
import Counter from "./components/Contador.jsx";
import Greeting from "./components/Saludo.jsx";

function App() {

  
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Hola desde React con Vite! 🎉</h1>
      <p>Este es mi primer proyecto en React</p>

      <Counter />
      <Greeting />
    </div>
  )
}

export default App;
