import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/RegistrarUsuario.css";
import Swal from "sweetalert2";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasenaRep, setContrasenaRep] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const navigate = useNavigate();

  async function signup(name, lastname, mail, pass, phone) {
    const signupUrl = "http://localhost:8080/signup";

    // Verificación básica de datos
    if (!name || !mail || !pass) {
      throw new Error("Nombre, correo y contraseña son obligatorios.");
    }

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          mail: mail,
          pass: pass,
          phone: phone,
        }),
      });

      // El backend devuelve 201 CREATED si es exitoso
      if (response.status === 201) {
        const newUser = await response.json();

        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#28a745",
        }).then(() => {
          navigate("/inicio-sesion");
        });
        return newUser;
      }

      // Manejar errores como 400 Bad Request (si el correo ya existe, etc.)
      const errorData = await response
        .json()
        .catch(() => ({ message: "Error desconocido." }));
      const errorMessage =
        errorData.message || `Fallo en el registro: Estado ${response.status}`;

      throw new Error(errorMessage);
    } catch (error) {
      console.error("Error al intentar registrar:", error.message);
      throw error;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de email con regex simple
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contrasenaValida = /^(?=.*[A-Z])(?=.*\d)(?=.*[@*])[A-Za-z\d@*]{10,}$/;

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
    if (!nombre) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese su nombre.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });

      return;
    }
    if (!apellido) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese su apellido.",
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
    if (!contrasenaValida.test(contrasena)) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingresa una contraseña válida (1 mayuscula, 1 número, 1 carácter especial (@ o *) y mínimo 10 de largo).",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      return;
    }
    if (contrasena !== contrasenaRep) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden.",
        icon: "warning",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    signup(nombre, apellido, email, contrasena, telefono);
  };

  return (
    <div className="formulario-registro-usuario">
      <h1 className="text-center  fw-bold titulo-reg mb-4">Crear cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su correo (*):
          </label>
          <input
            type="email"
            name="email"
            autoComplete="username"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="correo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su nombre (*):
          </label>
          <input
            type="user"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Felipe"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su apellido (*):
          </label>
          <input
            type="user"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Castillo"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su telefono:
          </label>
          <input
            type="user"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+569..."
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Crea una contraseña (*):</label>
          <input
            type={mostrarContrasena ? "text" : "password"}
            className="form-control"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Repita la contraseña (*):</label>
          <input
            type={mostrarContrasena ? "text" : "password"}
            name="new-password"
            autoComplete="new-password"
            className="form-control"
            placeholder="Contraseña"
            value={contrasenaRep}
            onChange={(e) => setContrasenaRep(e.target.value)}
          />
        </div>

        {/* Checkbox para mostrar contraseña */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            name="confirm-password"
            autoComplete="new-password"
            type="checkbox"
            id="mostrarContrasenaCheck"
            checked={mostrarContrasena}
            onChange={() => setMostrarContrasena(!mostrarContrasena)}
          />
          <label className="form-check-label" htmlFor="mostrarContrasenaCheck">
            Mostrar contraseñas
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn boton-rojo mt-2">
            Crear cuenta
          </button>
        </div>

        <p className="text-center mt-5">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/inicio-sesion" className="link-inicio-sesion">
            ¡Inicia sesión aquí!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
