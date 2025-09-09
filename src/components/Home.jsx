import { useState, useEffect } from "react";
import Productos from "./Productos";
import Carrito from "./Carrito";
import CarritoBoton from "./CarritoBoton";
import "../style/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  // Estado carrito con persistencia en localStorage
  const [carrito, setCarrito] = useState(() => {
    const almacenado = localStorage.getItem("carrito");
    return almacenado ? JSON.parse(almacenado) : [];
  });

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Funciones carrito
  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const incrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <div className="home">
      <div className="bienvenida">
        <h1 className="display-4 fw-bold">Tu almacén, sin filas ni esperas</h1>
        <h5 className="lead">Compra fácil, rápido y a tu ritmo</h5>
        <Link to="/productos">
          <button className="btn btn-primary mt-3" to="/productos">
            COMPRAR
          </button>
        </Link>
      </div>

      <Productos carrito={carrito} agregarProducto={agregarProducto} />
      <Carrito
        carrito={carrito}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
        incrementarCantidad={incrementarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarProducto={eliminarProducto}
        vaciarCarrito={vaciarCarrito}
      />
      <CarritoBoton
        carrito={carrito}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
      />
    </div>
  );
}
