
import React, { useState } from "react";
import { formatearFecha } from "../components/helpers";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom";

const NuevaMeta = ({
  nombreUsuario,
  setNombreUsuario,
  meta,
  setMeta,
  setIsValidMeta,
}) => {
  const [mensaje, setMensaje] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleMeta = (e) => {
    e.preventDefault();

    const trimmedMeta = meta.trim(); // Trim any leading or trailing whitespaces

    const MAX_CHARACTERS = 20;

    // ... (resto de tu código)

    if (!trimmedMeta) {
      // If meta is empty, display an error message
      setMensaje("La meta no puede estar vacía");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    if (trimmedMeta.length > MAX_CHARACTERS) {
      // If meta exceeds the character limit, display an error message
      setMensaje(`La meta no puede tener más de ${MAX_CHARACTERS} caracteres`);
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    // Proceed with setting the message and updating the state
    setMensaje("");
    setIsValidMeta(true);

    // Update the state 'fecha' with the value of 'meta'
    // (You might want to include the logic for updating 'fecha' here)
  };

  return (
    <div className="contenedor-meta">
      <form className="formulario" onSubmit={handleMeta}>
        {/* Comentario eliminado, ya que el bloque de código está comentado */}
        {/* <div className="campo">
          <label htmlFor="usuarioInput">Cual es tu nombre:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="añadi el nombre tuyo"
            id="userInput"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(String(e.target.value))}
          />
        </div> */}

        <div className="campo">
          <label htmlFor="metaInput">Name Your Objective:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="Enter Your Goal Name"
            id="metaInput"
            value={meta}
            onChange={(e) => setMeta(String(e.target.value))}
          />
        </div>

        <input className="input-goal" type="submit" value="Set Goal" />
        {mensaje && <p>{mensaje}</p>}
      </form>

      {location.pathname !== "/navbar/home" && (
        <Profile nombreUsuario={nombreUsuario} />
      )}

      <div></div>
    </div>
  );
};

export default NuevaMeta;


