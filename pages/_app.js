import '../styles/normalize.css';
import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    //! si se define aqui un state, se distribuye a todos los componentes
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        const carritoLocal = localStorage.getItem('carrito');
        if (carritoLocal) {
            setCarrito(JSON.parse(carritoLocal));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarProducto = (producto) => {
        if (carrito.some((item) => item.id === producto.id)) {
            const caritoActualizado = carrito.map((item) => {
                if (item.id === producto.id) {
                    item.cantidad = producto.cantidad;
                }
                return item;
            });
            setCarrito(caritoActualizado);
        } else {
            setCarrito([...carrito, producto]);
        }
        setTotal(total + producto.precio);
        setCantidad(cantidad + 1);
    };

    const actualizarCantidad = (producto) => {
        const caritoActualizado = carrito.map((item) => {
            if (item.id === producto.id) {
                item.cantidad = producto.cantidad;
            }
            return item;
        });
        setCarrito(caritoActualizado);
    };

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter((item) => item.id !== id);
        setCarrito(carritoActualizado);
        setTotal(total - carrito.find((item) => item.id === id).precio);
    };

    return (
        <Component
            {...pageProps}
            carrito={carrito}
            agregarProducto={agregarProducto}
            actualizarCantidad={actualizarCantidad}
            eliminarProducto={eliminarProducto}
        />
    );
}

export default MyApp;
