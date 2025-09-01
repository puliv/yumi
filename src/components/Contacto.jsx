import { useState } from "react";
import "../style/Contacto.css";

function Contacto() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de email con regex simple
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Por favor, ingresa un correo electrónico.");
      return;
    }
    if (!emailValido.test(email)) {
      alert("Por favor, ingresa un correo válido (nombre@correo.com).");
      return;
    }
    if (!mensaje) {
      alert("Por favor, escribe un mensaje.");
      return;
    }

    alert("Formulario enviado con éxito ✅");
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
            placeholder="name@example.com"
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

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;