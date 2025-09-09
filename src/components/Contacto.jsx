import ContactForm from './ContactForm';

function Contacto() {
  return(
    <>
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Contacto</h1>
      <p>¿Tienes alguna duda o sugerencia? ¡Escríbenos!</p>
      <br />
      <br />
      <ContactForm />
      <div style={{ marginTop: "5rem" }}></div>
    </div>
    </>
  );
}

export default Contacto;