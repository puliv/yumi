import "../style/Footer.css";
import yumi from "../assets/yumi_blanco.png";

function Footer() {
  return (
    <footer
      id="footer"
      className="footer bg-dark text-white py-4 mt-auto"
    >
      <div className="container">
        <div className="row">
          {/* Columna 1 - Información de la empresa */}
          <div className="col-md-4 mb-3">
            <img src={yumi} alt="" width="160" height="auto" />
            <p>Software de autoservicio para tu tienda.</p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/productos" className="text-white text-decoration-none">
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="/quienes-somos"
                  className="text-white text-decoration-none"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p>Email: contacto@yumiautoservicio.com</p>
            <p>Teléfono: +56 9 9999 9999</p>
            <div>
              <a href="#" className="text-white me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center pt-3 border-top border-light">
          <p className="mb-1">
            &copy; 2025 YUMI AUTOSERVICE. Todos los derechos reservados.
          </p>
          <small>Hecho con ❤️</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
