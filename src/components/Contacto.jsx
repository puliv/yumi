import ContactForm from './ContactForm';

function Contacto() {
  return(
    <>
    <h1>Contacto</h1>
    <p>¿Tienes alguna duda o sugerencia? ¡Escríbenos!</p>
    <br />
    <br />
    <ContactForm />
    <div style={{ marginTop: "5rem" }}></div>
    </>
  );
}

export default Contacto;