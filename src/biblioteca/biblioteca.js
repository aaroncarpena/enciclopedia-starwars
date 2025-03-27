export function formatoEuropeo(fecha) {
    if (!(fecha instanceof Date) || isNaN(fecha)) {
        throw new Error("El argumento debe ser un objeto Date válido.");
    }

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}
