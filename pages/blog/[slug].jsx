import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { formatDate } from '../../helpers';
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ ent }) => {
    const router = useRouter();
    //! por alguna razon el ent devolvio un array.
    const [attributes] = ent;
    //! use esta desestructuracion de doble punto porque habia 2 attributes
    const { titulo, contenido, imagen, createdAt, slug } =
        attributes.attributes;

    //! esto funciono, asi que asi lo haremos siempre que se pueda con strapi y urls.

    console.log(slug);

    return (
        <Layout pagina={titulo}>
            <main className='container'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        layout='responsive'
                        width={800}
                        height={600}
                        src={imagen.data.attributes.url}
                        alt={titulo}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatDate(createdAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export default EntradaBlog;

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs?populate=*`;
    const resp = await fetch(url);
    const entradas = await resp.json();
    const { data } = entradas;

    const paths = data.map((entrada) => ({
        params: { slug: entrada.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    //! aqui se uso un filtro para encontrar por el slug. Esto es una forma de hacerlo
    const url = `${process.env.API_URL}/blogs?populate=*&filters[slug][$eq]=${slug}`;
    const resp = await fetch(url);
    const entrada = await resp.json();
    const ent = entrada.data;

    return {
        props: { ent },
    };
}

//! asi se hace con getserverSideProps
// export async function getServerSideProps({ query: { id } }) {
//     const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
//     const url = `${process.env.API_URL}/blogs?populate=*`;
//     const resp = await fetch(url);
//     const entrada = await resp.json();
//     const { data } = entrada;

//     return {
//         props: { data },
//     };
// }
