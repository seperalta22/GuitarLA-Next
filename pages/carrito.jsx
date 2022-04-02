import Layout from '../components/Layout';
import Image from 'next/image';
import styles from './../styles/Carrito.module.css';
import { useState, useEffect } from 'react';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.precio * producto.cantidad,
            0
        );
        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <Layout pagina={'Carrito de compras'}>
            <h1 className='heading'>Carrito</h1>
            <main className={`container ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Articulos:</h2>
                    {carrito.length === 0
                        ? 'No hay productos en el carrito'
                        : carrito.map((producto) => (
                              <div
                                  className={styles.producto}
                                  key={producto.id}
                              >
                                  <div>
                                      <Image
                                          layout='responsive'
                                          width={250}
                                          height={500}
                                          src={producto.imagen}
                                          alt={producto.nombre}
                                      />
                                  </div>
                                  <div className={styles.info}>
                                      <h3 className={styles.nombre}>
                                          {producto.nombre}
                                      </h3>
                                      <div className={styles.cantidad}>
                                          <p>Cantidad: </p>
                                          <input
                                              className={styles.input}
                                              type='number'
                                              name='cantidad'
                                              id='cantidad'
                                              min='1'
                                              max='10'
                                              value={producto.cantidad}
                                              onChange={(e) =>
                                                  actualizarCantidad({
                                                      cantidad: e.target.value,
                                                      id: producto.id,
                                                  })
                                              }
                                          />
                                      </div>
                                      <p className={styles.precio}>
                                          $ <span>{producto.precio}</span>
                                      </p>
                                      <p className={styles.subtotal}>
                                          Subtotal: ${' '}
                                          <span>
                                              {producto.precio *
                                                  producto.cantidad}
                                          </span>
                                      </p>
                                  </div>
                                  <button
                                      type='button'
                                      className={styles.eliminar}
                                      onClick={() =>
                                          eliminarProducto(producto.id)
                                      }
                                  >
                                      x
                                  </button>
                              </div>
                          ))}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del Pedido</h3>
                            <p>Subtotal: ${total}</p>
                            <p>Envio: $0</p>
                            <p>Total: ${total}</p>
                        </>
                    ) : (
                        <p>No hay productos en el carrito</p>
                    )}
                </div>
            </main>
        </Layout>
    );
};

export default Carrito;
