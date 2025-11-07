import "../style/CarritoBoton.css";

const CarritoBoton = ({ carrito, mostrarCarrito, setMostrarCarrito }) => {
    if (mostrarCarrito || !Array.isArray(carrito)) return null;

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <button
        className="btn btn-primary boton-flotante"
        onClick={() => setMostrarCarrito(true)}
        >
        <i
            className="bi bi-cart"
            style={{ fontSize: "2rem", backgroundColor: "#ff3131" }}
        ></i>
        {totalItems > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {totalItems}
            </span>
        )}
        </button>
    );
};

export default CarritoBoton;