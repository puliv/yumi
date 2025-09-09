import ContactForm from "./ContactForm";

function Contacto() {
  // Calcular el alto del header para ajustar el margen superior
  const header = document.querySelector(".navbar");
  const headerHeight = header ? header.offsetHeight : 0;

  return (
    <>
      <div className="container" style={{ paddingTop: headerHeight * 1.5 }}>
        <h1 className="text-center mb-5 fw-bold">Contacto</h1>
        <p className="text-center">
          ¿Tienes alguna duda o sugerencia? ¡Escríbenos!
        </p>
        <br />
        <br />
        <ContactForm />
        <div style={{ marginTop: "5rem" }}></div>
      </div>
    </>
  );
}

export default Contacto;
