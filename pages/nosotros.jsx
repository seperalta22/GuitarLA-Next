import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

export default function Nosotros(params) {
    return (
        <Layout pagina='Nosotros'>
            <main className='container'>
                <h2 className='heading'>Sobre Guitar LA</h2>

                <div className={styles.contenido}>
                    <Image
                        layout='responsive'
                        alt='imagen nosotros'
                        src='/img/nosotros.jpg'
                        width={600}
                        height={450}
                    />

                    <div className=''>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ducimus possimus exercitationem asperiores
                            quis explicabo similique nihil, distinctio
                            architecto, laboriosam obcaecati quo voluptates
                            sapiente ex sed, fugit quam sequi est sint? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum laudantium eum delectus ullam, assumenda
                            eveniet sapiente nisi at doloribus, neque non
                            deleniti eligendi, maxime tempore quos minima
                            commodi voluptatibus. Cupiditate.
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. In totam minima eveniet, pariatur aliquam
                            expedita corrupti modi voluptate qui ea esse
                            quibusdam tempora consequatur ipsam, possimus quod
                            illum, sint est. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eius neque quam odio,
                            incidunt itaque provident. Architecto minima, eum
                            quisquam totam, harum ullam fuga illum nobis ratione
                            eveniet quod, quaerat ipsa!
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
