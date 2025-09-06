import { useState } from "react";
import "../style/Contacto.css";
import Swal from "sweetalert2";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de email con regex simple
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      //alert("Por favor, ingresa un correo electrónico.");
      //Swal.fire("Por favor, ingresa un correo electrónico.", "correo@mail.com");
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico.',
        icon: 'error',                   // icono rojo
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#dc3545'    // rojo
      })
      return;
    }
    if (!emailValido.test(email)) {
      //alert("Por favor, ingresa un correo válido (nombre@correo.com).");
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo válido (nombre@correo.com).',
        icon: 'error',                   // icono rojo
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#dc3545'    // rojo
      })
      return;
    }
    if (!mensaje) {
      //alert("Por favor, escribe un mensaje.");
      Swal.fire({
        title: 'Error',
        text: 'Por favor, escribe un mensaje.',
        icon: 'error',                   // icono rojo
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#dc3545'    // rojo
      })
      
      return;
    }

    //alert("Formulario enviado con éxito ✅");
    Swal.fire({
      title: '¡Enviado!',
      text: 'Tu formulario se ha enviado correctamente.',
      icon: 'success',               // icono verde de éxito
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28a745'  // verde (Bootstrap "success")
    });
    // Aquí más adelante puedes hacer un fetch o axios para enviar los datos
  };

  return (
    <div className="formulario-contacto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingresa tu correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="correo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Déjanos tu mensaje
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;