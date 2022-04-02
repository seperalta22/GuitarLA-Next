import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({ guitarra }) => {
    const { descripcion, precio, nombre, imagen, slug } = guitarra;

    return (
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
                <Link href={`/guitarra/[id]`} as={`/guitarra/${slug}`}>
                    <a className={styles.enlace}>Ver Guitarra</a>
                </Link>
            </div>
        </div>
    );
};

export default Guitarra;
