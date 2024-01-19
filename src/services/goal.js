export default class Goal {
  //* - - - </> [GET] </> - - - *//
  async getGoal()
  {
    try {
      const response = await fetch('http://localhost:3000/goals', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });
  
      // Verificar si la respuesta es exitosa (código de estado 200)
      if (response.ok) {
        // Convertir la respuesta a formato JSON
        const data = await response.json();
  
        // Hacer algo con los datos (en este caso, simplemente imprimirlos en la consola)
        console.log('Datos obtenidos:', data);
  
        // Puedes retornar los datos si es necesario
        return data;
      } else {
        // Manejar errores si la respuesta no es exitosa
        console.error('Error al obtener datos de la API:', response.status);
        // También puedes lanzar una excepción si lo prefieres
        throw new Error(`Error al obtener datos de la API: ${response.status}`);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error en la llamada a la API:', error);
      // También puedes lanzar una excepción si lo prefieres
      throw new Error(`Error en la llamada a la API: ${error.message}`);
    }
  }






















  
  // //* - - - </> [POST] </> - - - *//
  // async createCategory(data) {
  //   try {
  //     //* - - - </> [URL] </> - - - *//
  //     const response = await axios.post(
  //       "http://localhost:3000/api/categories",
  //       data
  //     );
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     //* - - - </> [ERROR] </> - - - *//
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // //* - - - </> [GET] </> - - - *//
  // async getCategory(id) {
  //   try {
  //     //* - - - </> [URL] </> - - - *//
  //     const { data } = await axios.get(
  //       `http://localhost:3000/api/categories/${id}`
  //     );
  //     return data;
  //   } catch (error) {
  //     //* - - - </> [ERROR] </> - - - *//
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // //* - - - </> [PUT] </> - - - *//
  // async updateCategory(id, data) {
  //   try {
  //     //* - - - </> [URL] </> - - - *//
  //     await axios.put(`http://localhost:3000/api/categories/${id}`, data);
  //     return { status: 200, message: "Content updated successfully!" };
  //   } catch (error) {
  //     //* - - - </> [ERROR] </> - - - *//
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // //* - - - </> [DELETE] </> - - - *//
  // async deleteCategory(id) {
  //   try {
  //     //* - - - </> [URL] </> - - - *//
  //     await axios.delete(`http://localhost:3000/api/categories/${id}`);
  //     return { status: 200, message: "Content removed successfully!" };
  //   } catch (error) {
  //     //* - - - </> [ERROR] </> - - - *//
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
