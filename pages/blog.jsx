import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

export default function Blog({ entrada2 }) {
    return (
        <Layout pagina='Blog'>
            <main className='container'>
                <ListadoBlog entradas={entrada2} />
            </main>
        </Layout>
    );
}

//! esta funcion de abajo solo corre en el servidor (o sea consola)

export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?populate=*`;
    const resp = await fetch(url);
    const entradas = await resp.json();
    const entrada2 = entradas.data;

    return {
        props: { entrada2 },
    };
}
