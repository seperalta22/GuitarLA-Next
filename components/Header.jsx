import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = ({ guitarra }) => {
    const router = useRouter();
    console.log(router);

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.barra}>
                    <div className='logo'>
                        <Link href='/' passHref>
                            <a>
                                <Image
                                    width={400}
                                    height={100}
                                    src='/img/logo.svg'
                                    alt='imagen logo'
                                />
                            </a>
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                        <Link href='/carrito'>
                            <a href=''>
                                <Image
                                    layout='fixed'
                                    width={30}
                                    height={18}
                                    src='/img/carrito.png'
                                    alt='imagen carrito'
                                />{' '}
                                <p className={styles.carrito}>Carrito</p>
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <div className={styles.guitarra_contenido}>
                            <h2 className='heading'>
                                Modelo {guitarra.attributes.nombre}
                            </h2>
                            <p className={styles.texto}>
                                {guitarra.attributes.descripcion}
                            </p>
                            <p className={styles.precio}>
                                ${guitarra.attributes.precio}
                            </p>
                            <Link
                                href={`/guitarra/${guitarra.attributes.slug}`}
                            >
                                <a className={styles.enlace} href=''>
                                    Ver Producto
                                </a>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {router.pathname === '/' && (
                <div className={styles.guitarra}>
                    <Image
                        layout='fixed'
                        width={500}
                        height={1200}
                        src='/img/header_guitarra.png'
                        alt='imagen header guitarra'
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
