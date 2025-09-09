import "../style/QuienesSomos.css";

function QuienesSomos() {
  // Calcular el alto del header para ajustar el margen superior
  const header = document.querySelector(".navbar");
  const headerHeight = header ? header.offsetHeight : 0;

  return (
    <div className="container " style={{ marginTop: headerHeight * 1.5, marginBottom: '70px' }}>
      <h1 className="text-center mb-5 fw-bold">Quiénes Somos</h1>

      <div className="card shadow-lg p-4 border-0">
        <div className="card-body">
          <p className="lead text-center">
            En <strong>YUMI Autoservicio</strong> ofrecemos una plataforma
            digital que moderniza la experiencia de compra en tiendas pequeñas y
            minimarkets, entregando soluciones de autoservicio con carrito de
            compras integrado.
          </p>

          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h5 text-primary">Nuestra Misión</h2>
                  <p>
                    Democratizar la tecnología en el comercio minorista,
                    permitiendo que los pequeños negocios accedan a soluciones
                    modernas para competir en igualdad de condiciones con
                    grandes cadenas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h5 text-primary">Nuestra Visión</h2>
                  <p>
                    Convertirnos en la plataforma de autoservicio más accesible
                    y confiable para tiendas de barrio y minimarkets en
                    Latinoamérica, potenciando la eficiencia y mejorando la
                    experiencia de compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="h5 text-primary mb-3">Qué Ofrecemos</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                🛒 Carrito de compras rápido y fácil
              </li>
              <li className="list-group-item">
                ✨ Interfaz intuitiva y moderna
              </li>
              <li className="list-group-item">
                ⚡ Optimización de procesos de venta
              </li>
              <li className="list-group-item">
                🤝 Soporte y mejoras constantes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
