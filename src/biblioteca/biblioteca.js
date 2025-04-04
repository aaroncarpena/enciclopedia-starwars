/**
 * Convierte una cadena de fecha en formato europeo (DD/MM/YYYY)
 * Versión simple en JavaScript puro
 * @param {string} fechaStr - Cadena de fecha a convertir
 * @returns {string} Fecha en formato europeo (DD/MM/YYYY)
 */
export function formatoEuropeo(fechaStr) {
    // Crear un objeto Date a partir de la cadena
    var fecha = new Date(fechaStr);
    
    // Verificar si la fecha es válida
    if (isNaN(fecha.getTime())) {
      return "Fecha inválida";
    }
    
    // Obtener componentes de la fecha
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    
    // Añadir cero inicial si es necesario
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    
    // Devolver en formato europeo
    return dia + "/" + mes + "/" + anio;
  }