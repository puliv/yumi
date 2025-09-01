import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/layout.css";


function App() {
  return (
    <Router>
      <div className="App">                           {/* Contenedor principal de la aplicación */}
        <Navbar />                                    {/* Navbar siempre visible */}
        <div className="layout">                      {/* Contenedor para el contenido de la página */}
          <Routes>                                    {/* Rutas para contenido dinámico */}
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer /> {/* Footer siempre visible */}
      </div>
    </Router>
  );
}

export default App;