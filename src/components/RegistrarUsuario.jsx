import RegisterForm from "./RegisterForm";

function RegistrarUsuario() {

    return (
    <>
        <div className="registro-usuario-container">
            {/* Imagen lado izquierdo */}
            <div className="registro-usuario-imagen"></div>

            {/* Formulario lado derecho */}
            <div className="registro-usuario-formulario">
                <h1 className="text-center my-4 fw-bold">Crear cuenta</h1>
                <p className="text-center mb-4">
                    Crea una nueva cuenta para continuar
                </p>
                <RegisterForm />
            </div>
        </div>
    </>
    );
}

export default RegistrarUsuario;