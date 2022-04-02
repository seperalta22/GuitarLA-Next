import React from 'react';
import Link from 'next/link';

import styles from '../styles/Curso.module.css';

const Curso = ({ curso }) => {
    const { attributes } = curso;
    const { titulo, contenido, precio, imagen } = attributes;
    return (
        <section>
            <div className={`container ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>

                    <Link href='/'>
                        <a className={styles.enlace} href=''>
                            Más Información
                        </a>
                    </Link>
                </div>
            </div>

            <style>
                {`section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 /.6),rgb(0 0 0 /.65)), url(${imagen.data.attributes.url});
                    background-size: cover;
                    background-position: 50%;
                    
                `}
            </style>
        </section>
    );
};

export default Curso;
