export const formatDate = (date) => {
    const fechaNueva = new Date(date);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    return fechaNueva.toLocaleDateString('es-ES', opciones);
};
