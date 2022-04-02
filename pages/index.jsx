import Curso from '../components/Curso';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({ guitarrad, cursod, entrada2 }) {
    return (
        <Layout pagina='Inicio' guitarra={guitarrad[3]}>
            <main className='container'>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado guitarras={guitarrad} />
            </main>
            <Curso curso={cursod} />
            <ListadoBlog entradas={entrada2} />
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=*`;
    const urlCursos = `${process.env.API_URL}/curso?populate=*`;
    const urlBlog = `${process.env.API_URL}/blogs?populate=*`;

    const [resGuitarras, resCursos, resBlog] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlCursos),
        fetch(urlBlog),
    ]);

    const [guitarras, curso, entradas] = await Promise.all([
        resGuitarras.json(),
        resCursos.json(),
        resBlog.json(),
    ]);

    const guitarrad = guitarras.data;
    const cursod = curso.data;
    const entrada2 = entradas.data;

    return {
        props: { guitarrad, cursod, entrada2 },
    };
};
