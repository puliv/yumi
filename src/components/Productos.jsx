import { useEffect, useState } from "react";
import "../style/Productos.css";

export const Productos = ({ ref, agregarProducto }) => {
  const [productos, setProductos] = useState([]);
  // Estado para la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductos(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });

  // Obtener categorías únicas desde los datos
  const categorias = ["todos", ...new Set(productos.map((p) => p.category))];

  // Filtrar productos según categoría
  const productosFiltrados =
    categoriaSeleccionada === "todos"
      ? productos
      : productos.filter((p) => p.category === categoriaSeleccionada);

  // Calcular el alto del header para ajustar el margen superior
  const header = document.querySelector(".navbar");
  const headerHeight = header ? header.offsetHeight : 0;

  return (
    <div
      className="productos min-vh-100"
      ref={ref}
      style={{ marginTop: headerHeight }}
    >
      <div className="row">
        {/* Botones de categorías */}
        <div className="text-center mb-4">
          {categorias.map((categ) => (
            <button
              key={categ}
              className={`boton-pag ${
                categoriaSeleccionada === categ ? "active" : ""
              }`}
              onClick={() => setCategoriaSeleccionada(categ)}
            >
              {categ.charAt(0).toUpperCase() + categ.slice(1)}
            </button>
          ))}
        </div>

        {/* Lista de productos */}
        <div className="row">
          {productosFiltrados.map((producto) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={producto.id}
            >
              <div className="card h-100 card-hover">
                <img
                  src={`http://localhost:8080${producto.image}`}
                  className="card-img-top img-producto"
                  alt={producto.name}
                  style={{ objectFit: "cover", width: "100%", height: "200px" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-semibold">
                    {producto.name}{" "}
                    <span className="texto-gris">{producto.quantity}</span>
                  </h5>
                </div>
                <div className="text-start">
                  <h4>${producto.price.toLocaleString("es-CL")}</h4>
                </div>
                <div className="text-start texto-gris">
                  <h6>{producto.brand}</h6>
                </div>
                <div className="text-center mt-2">
                  <button
                    className="button-hover"
                    onClick={() => agregarProducto(producto)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Si no hay productos en esa categoría */}
          {productosFiltrados.length === 0 && (
            <p className="text-center">No hay productos en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
