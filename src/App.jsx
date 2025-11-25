import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import InicioSesion from "./components/InicioSesion";
import RegistrarUsuario from "./components/RegistrarUsuario";
import "./style/App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  fetch("http://localhost:8080/hola") // Asegúrate de usar la URL correcta de tu API
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data); // Datos recibidos del Spring Boot
      // Actualiza el estado de tu componente React aquí
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

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
