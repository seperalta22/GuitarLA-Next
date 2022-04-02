import Guitarra from './Guitarra';
import styles from '../styles/Listado.module.css';

const Listado = ({ guitarras }) => {
    return (
        <div className={styles.listado}>
            {guitarras.map((guitarra) => (
                <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
        </div>
    );
};

export default Listado;
