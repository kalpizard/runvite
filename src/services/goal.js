export default class Goal {
  async getGoal() {
    try {
      const response = await fetch('http://localhost:3000/goals', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Datos obtenidos:', data);
        return data;
      } else {
        console.error('Error al obtener datos de la API:', response.status);
        throw new Error(`Error al obtener datos de la API: ${response.status}`);
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      throw new Error(`Error en la llamada a la API: ${error.message}`);
    }
  }
}




















