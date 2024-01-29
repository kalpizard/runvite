
// FUNCION GENERAR ID
export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatearFecha = (fecha) => {
  if (!fecha) {
    return "00/00/0000";
  }
  

  const fechaMeta = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  };

  return fechaMeta.toLocaleDateString("es-Es", opciones);
};