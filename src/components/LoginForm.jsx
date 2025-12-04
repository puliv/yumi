import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/InicioSesion.css";
import Swal from "sweetalert2";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [recordarme, setRecordarme] = useState("");
  const navigate = useNavigate();

  async function login(username, password) {
    const loginUrl = "http://localhost:8080/login";

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo es JSON
        },
        // El cuerpo de la petición debe contener las credenciales
        body: JSON.stringify({
          mail: username,
          pass: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message ||
          `Fallo en la petición: Estado ${response.status}`;

        throw new Error(errorMessage);
      }

      const data = await response.json();
      Swal.fire({
        title: `¡Hola, ${data.name}!`,
        text: "Inicio de sesión exitoso",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#28a745",
      }).then(() => {
        // Redirigir al usuario después de cerrar la alerta
        navigate("/home");
      });
      return data;
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Las credenciales no son validas.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      throw error;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de email con regex simple
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese su correo electrónico.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      return;
    }
    if (!emailValido.test(email)) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingresa un correo válido (nombre@correo.com).",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      return;
    }
    if (!contrasena) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese su contraseña.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    login(email, contrasena);
  };

  return (
    <div className="formulario-inicio-sesion">
      <h1 className="text-center fw-bold titulo-reg mb-4">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su correo:
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
            Ingrese su contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="form-check my-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="recordarmeCheck"
            checked={recordarme}
            onChange={(e) => setRecordarme(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="recordarmeCheck">
            Mantener sesión iniciada
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn boton-rojo mt-2">
            Iniciar Sesión
          </button>
        </div>

        <p className="text-center mt-5">
          ¿No tienes cuenta?{" "}
          <Link to="/registrar-usuario" className="link-registrar">
            ¡Regístrate aquí!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
