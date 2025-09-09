import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/layout.css";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* Navbar siempre visible */}
          <Menu />
          <Navbar />
          {/* Contenedor de rutas */}
          <div className="layout">
            <Routes>
              {/* Rutas dinámicas */}
              <Route path="/" element={<Home/>}/>
              <Route path="/catalogo" element={<Home/>}/>
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
          {/* Footer siempre visible */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
