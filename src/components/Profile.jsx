import React, { useEffect, useState } from "react";
import Goal from "../services/goal";

const Profile = ({ nombreUsuario }) => {
  const serviceGoal = new Goal();
  const [goal, setGoal] = useState();

  useEffect(() => {
    // Llamar a la función para obtener los datos al montar el componente
    fetchDataG();
  }, []);

  // Función para realizar la llamada a la API
  const fetchDataG = async () => {
    try {
      // Hacer la llamada a la API
      const response = await serviceGoal.getGoal();
      console.log(response);
      setGoal(response);
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error de red o en la llamada a la API', error);
    }
  };

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre de Usuario: {nombreUsuario}</p>
      {/* ... (otro código) */}
      <h2>Lista de Metas</h2>
      <ul>
        {/* Mapear los datos y renderizar cada elemento en la lista */}
        {goal ? (
          goal.map((objeto, index) => (
            <li key={index}>{objeto.goal_name}</li>
          ))
        ) : (
          null
        )}
      </ul>
    </div>
  );
};

export default Profile;
