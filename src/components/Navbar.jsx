import { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        {/* Logo o marca */}
        <a className="navbar-brand fw-bold" href="#">
          🚀 YUMI AUTOSERVICE
        </a>
        <div className={" justify-content-between"}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>

          {/* Botón a la derecha */}
          <a href="#" className="btn btn-outline-light ms-lg-3">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
