import { formatDate } from '../helpers';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Entrada.module.css';

const Entrada = ({ entrada }) => {
    const { attributes, id } = entrada;
    const { titulo, imagen, resumen, createdAt, slug } = attributes;

    return (
        <article className={styles.card}>
            <Image
                layout='responsive'
                width={800}
                height={600}
                src={imagen.data.attributes.url}
                alt={`imagen blog ${id}`}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatDate(createdAt)} </p>
                <p className={styles.resumen}>{resumen}</p>

                <Link href={`/blog/[id]`} as={`/blog/${slug}`}>
                    <a className={styles.enlace}>Leer Entrada</a>
                </Link>
            </div>
        </article>
    );
};

export default Entrada;
