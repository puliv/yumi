import "../style/Navbar.css";
import yumi from "../assets/yumi_blanco.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        {/* <ul className="nav d-none d-lg-flex">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="#"
              to="/quienes-somos"
            >
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul> */}
        <div className="navbar-brand">
          <Link className="nav-link" to="/">
            <img src={yumi} alt="" width="100" height="auto" />
          </Link>
        </div>
        <div className="menu-btn">
          <Link to="/inicio-sesion" className="btn btn-login me-2">
            <i className="bi bi-person-circle fs-5"></i>
          </Link>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <Menu />
    </nav>
  );
}

export default Navbar;
