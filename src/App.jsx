import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import "./style/App.css";
import "./style/layout.css";
import Menu from "./components/Menu";


function App() {
  return (
    <Router>
      <div className="App">                           {/* Contenedor principal de la aplicación */}
        <Navbar />                                    {/* Navbar siempre visible */}
        <div className="layout">                      {/* Contenedor para el contenido de la página */}
          <Routes>                                    {/* Rutas para contenido dinámico */}
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </div>
        <Footer /> {/* Footer siempre visible */}
      </div>
    </Router>
  );
}

export default App;