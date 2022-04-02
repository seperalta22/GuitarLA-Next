import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pagina, guitarra }) {
    return (
        <div>
            <Head>
                <title>GuitarLA-{pagina}</title>
                <meta
                    name='description'
                    content='Guitar LA es una tienda de guitarra online, con más de 10 años de experiencia en el sector musical.'
                />
            </Head>
            <Header guitarra={guitarra} />
            {children}

            <Footer />
        </div>
    );

    Layout.defaultProps = {
        guitarra: null,
    };
}
