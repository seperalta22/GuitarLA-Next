import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.contenido}`}>
                <nav className={styles.nav}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>

                <p className={styles.copyright}>
                    Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
