import "../style/Menu.css";
import yumi from "../assets/yumi-color.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Menu() {
  const offcanvasRef = useRef(null);

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      ref={offcanvasRef}
    >
      <div className="offcanvas-header">
        <img src={yumi} alt="" width="180" height="auto" />
        <button
          type="button"
          className="btn-close           
          position-absolute
          top-0
          end-0
          m-2"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="off-canvas-body-list">
          <li
            className="off-canvas-body-list-item"
            data-bs-dismiss="offcanvas"
          >
            <Link className="off-canvas-body-list-link" to="/">
              Inicio
            </Link>
          </li>
          <li
            className="off-canvas-body-list-item"
            data-bs-dismiss="offcanvas"
          >
            <Link
              className="off-canvas-body-list-link"
              href="#"
              to="/quienes-somos"
            >
              Nosotros
            </Link>
          </li>
          <li
            className="off-canvas-body-list-item"
            data-bs-dismiss="offcanvas"
          >
            <Link className="off-canvas-body-list-link" to="/productos">
              Catálogo
            </Link>
          </li>
          <li
            className="off-canvas-body-list-item"
            data-bs-dismiss="offcanvas"
          >
            <Link className="off-canvas-body-list-link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
