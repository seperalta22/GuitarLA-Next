import Layout from '../components/Layout';
import Listado from '../components/Listado';

export default function Tienda({ data }) {
    return (
        <Layout pagina='Tienda'>
            <main className='container'>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado guitarras={data} />
            </main>
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const url = `${process.env.API_URL}/guitarras?populate=*`;
    const resp = await fetch(url);
    const guitarras = await resp.json();
    const { data } = guitarras;

    return {
        props: { data },
    };
};
