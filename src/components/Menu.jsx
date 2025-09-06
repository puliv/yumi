import "../style/Menu.css";
import yumi from "../assets/yumi-color.png";

export default function Menu() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
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
          <li className="off-canvas-body-list-item">
            <a className="off-canvas-body-list-link" href="#">
              Inicio
            </a>
          </li>
          <li className="off-canvas-body-list-item">
            <a className="off-canvas-body-list-link" href="#">
              Nosotros
            </a>
          </li>
          <li className="off-canvas-body-list-item">
            <a className="off-canvas-body-list-link" href="#">
              Catálogo
            </a>
          </li>
          <li className="off-canvas-body-list-item">
            <a className="off-canvas-body-list-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
