import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'; // Importamos el componente Link de Next.js
import styles from '../styles/Page404.module.css';

const Page404 = () => {
    return (
        <div>
            <div className={styles.noEncontrado}>
                <h1 className='heading'>404-Pagina no encontrada.</h1>

                <Link href='/'>Volver al Inicio </Link>
            </div>
        </div>
    );
};

export default Page404;
