import LoginForm from "./LoginForm";
import ScrollToTop from "./ScrollToTop";

function InicioSesion() {
  // Calcular el alto del header para ajustar el margen superior
  const header = document.querySelector(".navbar");
  const headerHeight = header ? header.offsetHeight : 0;

  return (
    <>
      <div
        className="inicio-sesion-container"
        style={{ marginTop: headerHeight }}
      >
        <div className="inicio-sesion-formulario">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default InicioSesion;
