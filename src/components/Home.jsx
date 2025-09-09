import { useState, useEffect, useRef } from "react";
import Productos from "./Productos";
import Carrito from "./Carrito";
import CarritoBoton from "./CarritoBoton";
import "../style/Home.css";


export default function Home() {
  //Referencia para hacer scroll a seccion de productos
  const productsRef = useRef(null);

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

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const header = document.querySelector(".navbar");
    const headerHeight = header ? header.offsetHeight : 0;

    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top - headerHeight, // resta altura real del nav
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <div className="bienvenida">
        <h1 className="display-4 fw-bold">Tu almacén, sin filas ni esperas</h1>
        <h5 className="lead">Compra fácil, rápido y a tu ritmo</h5>
        <button
          className="btn btn-primary mt-3"
          onClick={() => scrollToRef(productsRef)}
        >
          COMPRAR
        </button>
      </div>
      <Productos
        ref={productsRef}
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
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
