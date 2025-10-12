import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import InicioSesion from "./components/InicioSesion";
import RegistrarUsuario from "./components/RegistrarUsuario"
import "./style/App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
