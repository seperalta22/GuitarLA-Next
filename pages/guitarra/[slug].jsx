import Image from 'next/image';
import styles from '../../styles/Guitarra.module.css';
import Layout from '../../components/Layout';
import { useState } from 'react';

const Producto = ({ data, agregarProducto }) => {
    const [{ attributes, id }] = data;
    const { nombre, precio, descripcion, imagen } = attributes;

    const [cantidad, setCantidad] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar producto al carrito
        const guitarraSeleccionada = {
            id,
            nombre,
            precio,
            cantidad,
            imagen: imagen.data.attributes.url,
        };
        agregarProducto(guitarraSeleccionada);
    };

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image
                    layout='responsive'
                    width={200}
                    height={350}
                    src={imagen.data.attributes.url}
                    alt={`imagen guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}> {descripcion}</p>
                    <p className={styles.precio}>$ {precio}</p>

                    <form
                        action=''
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label>Cantidad: </label>
                        <input
                            type='number'
                            name='cantidad'
                            id='cantidad'
                            min='1'
                            max='10'
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                        <button type='submit'>Agregar al carrito</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Producto;

export const getServerSideProps = async ({ query: { slug } }) => {
    const url = `${process.env.API_URL}/guitarras/?populate=*&filters[slug][$eq]=${slug}`;
    const resp = await fetch(url);
    const guitarra = await resp.json();
    const { data } = guitarra;

    return {
        props: { data },
    };
};
