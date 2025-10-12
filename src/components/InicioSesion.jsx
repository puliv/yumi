import LoginForm from "./LoginForm";

function InicioSesion() {

    return (
    <>
        <div className="inicio-sesion-container">
            {/* Imagen lado izquierdo */}
            <div className="inicio-sesion-imagen"></div>

            {/* Formulario lado derecho */}
            <div className="inicio-sesion-formulario">
                <h1 className="text-center my-4 fw-bold">Iniciar Sesión</h1>
                <p className="text-center mb-4">
                    Accede a tu cuenta para continuar
                </p>
                <LoginForm />
            </div>
        </div>
    </>
    );
}

export default InicioSesion;